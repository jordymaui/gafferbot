import predictions from "../../../public/data/predictions.json";

interface Prediction {
  id: number;
  home_team: string;
  away_team: string;
  league: string;
  match_date: string;
  home_win_pct: number;
  draw_pct: number;
  away_win_pct: number;
  predicted_home_goals: number;
  predicted_away_goals: number;
  confidence: number;
  confidence_label: string;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function pct(val: number) {
  return `${(val * 100).toFixed(0)}%`;
}

function confidenceColor(label: string) {
  switch (label) {
    case "HIGH":
      return "text-green-400";
    case "MEDIUM":
      return "text-yellow-400";
    default:
      return "text-zinc-400";
  }
}

// Group predictions by date
function groupByDate(preds: Prediction[]) {
  const groups: Record<string, Prediction[]> = {};
  for (const p of preds) {
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
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Predictions</h1>
        <p className="text-zinc-400">
          {data.length} predictions across 19 leagues. Updated{" "}
          {new Date(predictions.exported_at).toLocaleDateString("en-GB")}.
        </p>
      </div>

      {Object.entries(grouped).map(([date, preds]) => (
        <div key={date} className="mb-10">
          <h2 className="text-lg font-semibold text-[#2563eb] mb-4 border-b border-[#1e1e1e] pb-2">
            {date}
          </h2>
          <div className="grid gap-3">
            {preds.map((p) => (
              <div
                key={p.id}
                className="bg-[#111111] border border-[#1e1e1e] rounded-xl p-4 sm:p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-zinc-500 bg-[#1e1e1e] px-2 py-1 rounded">
                    {p.league}
                  </span>
                  <span className="text-xs text-zinc-500">
                    {formatDate(p.match_date)}
                  </span>
                </div>

                {/* Teams & Score */}
                <div className="flex items-center justify-center gap-4 sm:gap-8 mb-4">
                  <span className="text-base sm:text-lg font-medium text-right flex-1">
                    {p.home_team}
                  </span>
                  <div className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded-lg border border-[#1e1e1e]">
                    <span className="text-xl font-bold text-[#2563eb]">
                      {Math.round(p.predicted_home_goals)}
                    </span>
                    <span className="text-zinc-500">-</span>
                    <span className="text-xl font-bold text-[#2563eb]">
                      {Math.round(p.predicted_away_goals)}
                    </span>
                  </div>
                  <span className="text-base sm:text-lg font-medium text-left flex-1">
                    {p.away_team}
                  </span>
                </div>

                {/* Probabilities */}
                <div className="flex justify-between text-sm">
                  <div className="text-center">
                    <div className="text-zinc-500 text-xs mb-1">Home</div>
                    <div className="font-medium">{pct(p.home_win_pct)}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-zinc-500 text-xs mb-1">Draw</div>
                    <div className="font-medium">{pct(p.draw_pct)}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-zinc-500 text-xs mb-1">Away</div>
                    <div className="font-medium">{pct(p.away_win_pct)}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-zinc-500 text-xs mb-1">Confidence</div>
                    <div className={`font-medium ${confidenceColor(p.confidence_label)}`}>
                      {p.confidence_label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
