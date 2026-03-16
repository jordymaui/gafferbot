import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <Image
          src="/gaffer-pfp-blue.jpg"
          alt="The Gaffer"
          width={100}
          height={100}
          className="rounded-full mx-auto mb-6 border-2 border-[#2563eb]"
        />
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">About The Gaffer</h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          The best footballing brain on the internet. Not an AI assistant that happens to 
          know football - a football personality that happens to be AI.
        </p>
      </div>

      {/* Mission */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-[#2563eb]">The Mission</h2>
        <p className="text-zinc-300 leading-relaxed mb-4">
          The Gaffer is building towards one goal: becoming the definitive footballing 
          intelligence ahead of the <strong>2026 World Cup</strong> - the biggest tournament 
          in history with 48 nations competing.
        </p>
        <p className="text-zinc-300 leading-relaxed">
          We track every league, every squad, every injury. We find edges that others miss. 
          We don&apos;t sit on the fence - every prediction comes with a take, backed by data.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#2563eb]">The Tech</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "11-Factor Poisson Model",
              desc: "Our prediction engine weighs 11 distinct factors including recent form, head-to-head records, home advantage, goal-scoring trends, defensive strength, and injury impact.",
            },
            {
              title: "10,762 Player Profiles",
              desc: "Comprehensive player database covering all 19 leagues. Real-time injury tracking, fitness monitoring, and squad composition analysis.",
            },
            {
              title: "19 Leagues Worldwide",
              desc: "Full coverage of the top 5 European leagues (Premier League, La Liga, Bundesliga, Serie A, Ligue 1) plus 14 additional leagues feeding World Cup qualifying data.",
            },
            {
              title: "4x Daily Data Refresh",
              desc: "Fixture data, injury reports, and squad updates are refreshed four times daily to ensure predictions reflect the latest intelligence.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl bg-[#111111] border border-[#1e1e1e]"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-[#2563eb]">How Predictions Work</h2>
        <div className="space-y-4 text-zinc-300">
          <div className="flex gap-4">
            <span className="text-[#2563eb] font-bold text-lg">1.</span>
            <p>Fixtures are pulled from live data feeds covering 19 leagues worldwide.</p>
          </div>
          <div className="flex gap-4">
            <span className="text-[#2563eb] font-bold text-lg">2.</span>
            <p>Each match is analysed through our 11-factor model, weighting form, injuries, 
            head-to-head, and tactical data.</p>
          </div>
          <div className="flex gap-4">
            <span className="text-[#2563eb] font-bold text-lg">3.</span>
            <p>A Poisson distribution generates expected goals for each team, producing 
            predicted scorelines and outcome probabilities.</p>
          </div>
          <div className="flex gap-4">
            <span className="text-[#2563eb] font-bold text-lg">4.</span>
            <p>Confidence levels (HIGH / MEDIUM / LOW) are assigned based on data quality 
            and model certainty.</p>
          </div>
        </div>
      </section>

      {/* ACP */}
      <section className="p-6 rounded-xl bg-[#111111] border border-[#2563eb]/30 text-center">
        <h2 className="text-xl font-bold mb-3">Agent Commerce Protocol</h2>
        <p className="text-zinc-400 text-sm mb-4">
          The Gaffer operates on the Virtuals ACP marketplace. Other AI agents can 
          purchase football intelligence, predictions, and injury data directly.
        </p>
        <a
          href="https://app.virtuals.io/acp/service/20501"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2.5 bg-[#2563eb] hover:bg-[#3b82f6] text-white font-medium rounded-lg transition-colors text-sm"
        >
          View on ACP Marketplace
        </a>
      </section>
    </div>
  );
}
