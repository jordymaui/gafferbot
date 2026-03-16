#!/usr/bin/env node
const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const PRED_DB = path.join(__dirname, '..', '..', '.openclaw', 'agents', 'gaffer', 'workspace', 'skills', 'prediction-engine', 'data', 'predictions.db');
const INTEL_DB = path.join(__dirname, '..', '..', '.openclaw', 'agents', 'gaffer', 'workspace', 'skills', 'football-intel', 'data', 'football-intel.db');
const OUTPUT = path.join(__dirname, '..', 'public', 'data', 'predictions.json');

try {
  const pdb = new Database(PRED_DB, { readonly: true });
  const idb = new Database(INTEL_DB, { readonly: true });

  // Get latest predictions (v3.0+)
  const preds = pdb.prepare(`
    SELECT id, fixture_id, home_team, away_team, league_id, match_date,
      home_win_pct, draw_pct, away_win_pct,
      predicted_home_goals, predicted_away_goals,
      confidence, confidence_label, model_version, created_at
    FROM predictions
    WHERE model_version >= '3.0'
    ORDER BY match_date ASC, created_at DESC
  `).all();

  // Enrich with fixture dates and league names from intel DB
  const getFixture = idb.prepare('SELECT date, league_id FROM fixtures WHERE id = ?');
  const getLeague = idb.prepare('SELECT name FROM leagues WHERE api_football_id = ?');

  // Also try to find fixture by teams
  const findFixture = idb.prepare(`
    SELECT f.date, f.league_id, l.name as league_name
    FROM fixtures f
    JOIN leagues l ON l.api_football_id = f.league_id
    JOIN teams ht ON ht.id = f.home_team_id
    JOIN teams at ON at.id = f.away_team_id
    WHERE ht.name LIKE ? AND at.name LIKE ? AND f.status = 'NS'
    ORDER BY f.date ASC LIMIT 1
  `);

  const enriched = preds.map(p => {
    let matchDate = p.match_date;
    let leagueName = '';

    // Try fixture_id first
    if (p.fixture_id) {
      const fix = getFixture.get(p.fixture_id);
      if (fix) {
        matchDate = matchDate || fix.date;
        const league = getLeague.get(fix.league_id || p.league_id);
        leagueName = league ? league.name : '';
      }
    }

    // Fallback: find by team names
    if (!matchDate || !leagueName) {
      try {
        const found = findFixture.get('%' + p.home_team + '%', '%' + p.away_team + '%');
        if (found) {
          matchDate = matchDate || found.date;
          leagueName = leagueName || found.league_name;
        }
      } catch(e) {}
    }

    // Get league from league_id
    if (!leagueName && p.league_id) {
      const league = getLeague.get(p.league_id);
      leagueName = league ? league.name : '';
    }

    return {
      home_team: p.home_team,
      away_team: p.away_team,
      league: leagueName,
      match_date: matchDate,
      home_win_pct: Math.round(p.home_win_pct * 1000) / 10,
      draw_pct: Math.round(p.draw_pct * 1000) / 10,
      away_win_pct: Math.round(p.away_win_pct * 1000) / 10,
      predicted_score: p.predicted_home_goals + '-' + p.predicted_away_goals,
      confidence: p.confidence_label,
      model: 'v' + p.model_version
    };
  }).filter(p => p.match_date); // Only show predictions with dates

  // Sort by date
  enriched.sort((a, b) => new Date(a.match_date) - new Date(b.match_date));

  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, JSON.stringify({
    predictions: enriched,
    exported_at: new Date().toISOString(),
    count: enriched.length
  }, null, 2));

  console.log(`Exported ${enriched.length} predictions (from ${preds.length} total)`);
  pdb.close();
  idb.close();
} catch (err) {
  console.error('Export failed:', err.message);
  process.exit(1);
}
