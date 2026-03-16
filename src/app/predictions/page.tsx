import predictions from "../../../public/data/predictions.json";

interface Prediction {
  home_team: string;
  away_team: string;
  league: string;
  match_date: string;
  home_win_pct: number;
  draw_pct: number;
  away_win_pct: number;
  predicted_score: string;
  confidence: string;
  model: string;
}

function formatTime(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

function confidenceColor(label: string) {
  switch (label) {
    case "HIGH": return "text-green-400";
    case "MEDIUM": return "text-yellow-400";
    default: return "text-zinc-400";
  }
}

function groupByDate(preds: Prediction[]) {
  const groups: Record<string, Prediction[]> = {};
  for (const p of preds) {
    if (!p.match_date) continue;
    const day = new Date(p.match_date).toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    if (!groups[day]) groups[day] = [];
    groups[day].push(p);
  }
  return groups;
}

export default function PredictionsPage() {
  const data = predictions.predictions as Prediction[];
  const grouped = groupByDate(data);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">⚽ Predictions</h1>
        <p className="text-zinc-400">
          {data.length} match predictions from the Gaffer&apos;s 11-factor Poisson model.
        </p>
        <p className="text-zinc-500 text-sm mt-1">
          Last updated: {new Date(predictions.exported_at).toLocaleString("en-GB")}
        </p>
      </div>

      {Object.entries(grouped).map(([date, preds]) => (
        <div key={date} className="mb-10">
          <h2 className="text-lg font-semibold text-[#2563eb] mb-4 border-b border-[#1e1e1e] pb-2">
            {date}
          </h2>
          <div className="grid gap-3">
            {preds.map((p, i) => {
              const [homeGoals, awayGoals] = p.predicted_score.split("-");
              const topPct = Math.max(p.home_win_pct, p.draw_pct, p.away_win_pct);
              return (
                <div
                  key={i}
                  className="bg-[#111111] border border-[#1e1e1e] rounded-xl p-4 sm:p-5 hover:border-[#2563eb]/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-zinc-500 bg-[#1e1e1e] px-2 py-1 rounded">
                      {p.league || "Unknown"}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-medium ${confidenceColor(p.confidence)}`}>
                        {p.confidence}
                      </span>
                      <span className="text-xs text-zinc-600">
                        {formatTime(p.match_date)}
                      </span>
                    </div>
                  </div>

                  {/* Teams & Score */}
                  <div className="flex items-center justify-center gap-4 sm:gap-8 mb-4">
                    <span className={`text-base sm:text-lg font-medium text-right flex-1 ${p.home_win_pct === topPct ? "text-white" : "text-zinc-400"}`}>
                      {p.home_team}
                    </span>
                    <div className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded-lg border border-[#1e1e1e]">
                      <span className="text-xl font-bold text-[#2563eb]">{homeGoals}</span>
                      <span className="text-zinc-500">-</span>
                      <span className="text-xl font-bold text-[#2563eb]">{awayGoals}</span>
                    </div>
                    <span className={`text-base sm:text-lg font-medium text-left flex-1 ${p.away_win_pct === topPct ? "text-white" : "text-zinc-400"}`}>
                      {p.away_team}
                    </span>
                  </div>

                  {/* Probability Bars */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-500 w-10">Home</span>
                      <div className="flex-1 h-2 bg-[#1e1e1e] rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${p.home_win_pct === topPct ? "bg-[#2563eb]" : "bg-zinc-600"}`} style={{ width: `${p.home_win_pct}%` }} />
                      </div>
                      <span className={`text-xs w-12 text-right ${p.home_win_pct === topPct ? "text-[#2563eb] font-bold" : "text-zinc-400"}`}>
                        {p.home_win_pct.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-500 w-10">Draw</span>
                      <div className="flex-1 h-2 bg-[#1e1e1e] rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${p.draw_pct === topPct ? "bg-[#2563eb]" : "bg-zinc-600"}`} style={{ width: `${p.draw_pct}%` }} />
                      </div>
                      <span className={`text-xs w-12 text-right ${p.draw_pct === topPct ? "text-[#2563eb] font-bold" : "text-zinc-400"}`}>
                        {p.draw_pct.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-500 w-10">Away</span>
                      <div className="flex-1 h-2 bg-[#1e1e1e] rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${p.away_win_pct === topPct ? "bg-[#2563eb]" : "bg-zinc-600"}`} style={{ width: `${p.away_win_pct}%` }} />
                      </div>
                      <span className={`text-xs w-12 text-right ${p.away_win_pct === topPct ? "text-[#2563eb] font-bold" : "text-zinc-400"}`}>
                        {p.away_win_pct.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
