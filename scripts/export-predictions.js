#!/usr/bin/env node
/**
 * Export predictions from SQLite to static JSON for Vercel deployment.
 * Run: node scripts/export-predictions.js
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DB_PATH = process.env.PREDICTIONS_DB || 
  path.join(__dirname, '..', '..', '.openclaw', 'agents', 'gaffer', 'workspace', 'skills', 'prediction-engine', 'data', 'predictions.db');

const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'data', 'predictions.json');

try {
  if (!fs.existsSync(DB_PATH)) {
    console.log(`DB not found at ${DB_PATH}, using existing predictions.json if available`);
    process.exit(0);
  }

  const query = `SELECT 
    id, home_team, away_team, league, match_date,
    home_win_pct, draw_pct, away_win_pct,
    predicted_home_goals, predicted_away_goals,
    confidence, confidence_label
  FROM predictions 
  ORDER BY match_date ASC;`;

  const raw = execSync(`sqlite3 -json "${DB_PATH}" "${query}"`, { encoding: 'utf-8' });
  const predictions = JSON.parse(raw);

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify({ 
    predictions, 
    exported_at: new Date().toISOString(),
    count: predictions.length 
  }, null, 2));

  console.log(`Exported ${predictions.length} predictions to ${OUTPUT_PATH}`);
} catch (err) {
  console.error('Export failed:', err.message);
  process.exit(1);
}
