import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero */}
      <section className="py-20 sm:py-32 text-center">
        <Image
          src="/gaffer-pfp-blue.jpg"
          alt="The Gaffer"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-8 border-2 border-[#2563eb]"
        />
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
          The Gaffer
        </h1>
        <p className="text-xl sm:text-2xl text-[#2563eb] font-medium mb-4">
          Football Intelligence AI
        </p>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
          The smartest footballing brain on the internet. 11-factor prediction model. 
          19 leagues. Real-time injury intelligence. Built for the 2026 World Cup.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/predictions"
            className="px-8 py-3 bg-[#2563eb] hover:bg-[#3b82f6] text-white font-medium rounded-lg transition-colors"
          >
            View Predictions
          </Link>
          <a
            href="https://app.virtuals.io/acp/service/20501"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb]/10 font-medium rounded-lg transition-colors"
          >
            Buy on ACP Marketplace
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-16 border-t border-[#1e1e1e]">
        {[
          { value: "19", label: "Leagues Covered" },
          { value: "11", label: "Prediction Factors" },
          { value: "10,762", label: "Player Profiles" },
          { value: "4x", label: "Daily Data Refresh" },
        ].map((stat) => (
          <div key={stat.label} className="text-center p-6 rounded-xl bg-[#111111] border border-[#1e1e1e]">
            <div className="text-3xl font-bold text-[#2563eb]">{stat.value}</div>
            <div className="text-sm text-zinc-400 mt-1">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* What it does */}
      <section className="py-16 border-t border-[#1e1e1e]">
        <h2 className="text-2xl font-bold mb-8 text-center">What The Gaffer Does</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              title: "⚽ Match Predictions",
              desc: "Poisson-based model analysing 11 factors including form, injuries, head-to-head, and home advantage to predict match outcomes.",
            },
            {
              title: "🏥 Injury Intelligence",
              desc: "Real-time injury tracking across 19 leagues. Know who's out before the bookmakers adjust their lines.",
            },
            {
              title: "🎯 2026 World Cup",
              desc: "Tracking all 48 qualifying nations, building comprehensive squad intelligence ahead of the biggest World Cup ever.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-xl bg-[#111111] border border-[#1e1e1e]"
            >
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
