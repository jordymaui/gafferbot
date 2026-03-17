import Image from "next/image";

/* ── SVG icon components ── */
function ArrowUpRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function ACPIcon() {
  return (
    <div className="w-[20px] h-[20px] flex items-center justify-center">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12M6 12h12" />
      </svg>
    </div>
  );
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

/* ── Constellation Background ── */
function Constellation() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* SVG lines connecting nodes */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.25 }}>
        <line x1="8%" y1="15%" x2="22%" y2="35%" stroke="#2563eb" strokeWidth="1" />
        <line x1="22%" y1="35%" x2="12%" y2="58%" stroke="#2563eb" strokeWidth="1" />
        <line x1="12%" y1="58%" x2="28%" y2="72%" stroke="#2563eb" strokeWidth="1" />
        <line x1="22%" y1="35%" x2="35%" y2="22%" stroke="#2563eb" strokeWidth="1" />
        <line x1="35%" y1="22%" x2="42%" y2="45%" stroke="#2563eb" strokeWidth="1" />
        <line x1="42%" y1="45%" x2="28%" y2="72%" stroke="#2563eb" strokeWidth="1" />
        <line x1="8%" y1="15%" x2="35%" y2="22%" stroke="#2563eb" strokeWidth="1" />
        <line x1="12%" y1="58%" x2="42%" y2="45%" stroke="#2563eb" strokeWidth="1" />
        <line x1="28%" y1="72%" x2="18%" y2="88%" stroke="#2563eb" strokeWidth="1" />
        <line x1="42%" y1="45%" x2="35%" y2="22%" stroke="#2563eb" strokeWidth="0.5" />
      </svg>

      {/* Nodes */}
      <div className="absolute node-pulse" style={{ left: '8%', top: '15%', width: 10, height: 10, borderRadius: '50%', background: '#2563eb' }} />
      <div className="absolute node-pulse node-pulse-delay-1" style={{ left: '22%', top: '35%', width: 12, height: 12, borderRadius: '50%', background: '#2563eb' }} />
      <div className="absolute node-pulse node-pulse-delay-2" style={{ left: '12%', top: '58%', width: 8, height: 8, borderRadius: '50%', background: '#2563eb' }} />
      <div className="absolute node-pulse node-pulse-delay-3" style={{ left: '28%', top: '72%', width: 10, height: 10, borderRadius: '50%', background: '#2563eb' }} />
      <div className="absolute node-pulse node-pulse-delay-4" style={{ left: '35%', top: '22%', width: 8, height: 8, borderRadius: '50%', background: '#2563eb' }} />
      <div className="absolute node-pulse node-pulse-delay-5" style={{ left: '42%', top: '45%', width: 10, height: 10, borderRadius: '50%', background: '#2563eb' }} />
      <div className="absolute node-pulse node-pulse-delay-6" style={{ left: '18%', top: '88%', width: 8, height: 8, borderRadius: '50%', background: '#2563eb' }} />

      {/* Floating stat labels */}
      <span className="absolute float-label text-[11px] text-[#6b7b90] select-none" style={{ left: '5%', top: '25%' }}>730+ predictions</span>
      <span className="absolute float-label float-label-delay-1 text-[11px] text-[#6b7b90] select-none" style={{ left: '25%', top: '50%' }}>19 leagues</span>
      <span className="absolute float-label float-label-delay-2 text-[11px] text-[#6b7b90] select-none" style={{ left: '15%', top: '78%' }}>$2.00/query</span>
    </div>
  );
}

/* ── Main Page ── */
export default function Home() {
  return (
    <>
      <Constellation />

      <div className="relative z-10 max-w-[520px] mx-auto px-5 pt-12 pb-16 flex flex-col gap-6">

        {/* 1. Profile Pill */}
        <div className="animate-fade-in-up stagger-1 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-[#111111] border border-[#1e1e1e] rounded-full px-4 py-2 shadow-lg shadow-black/20">
            <Image
              src="/gaffer-pfp-blue.jpg"
              alt="The Gaffer"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-[16px] font-semibold">The Gaffer</span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0" />
            <span className="text-[14px] text-[#a1a1aa]">Football Intelligence AI</span>
          </div>
        </div>

        {/* 2. Hero Headline */}
        <div className="animate-fade-in-up stagger-2 text-center" style={{ lineHeight: 0.95 }}>
          <h1 className="text-[72px] sm:text-[80px] font-black text-white leading-none">
            Football
          </h1>
          <h1
            className="text-[72px] sm:text-[80px] font-black text-[#3b82f6] leading-none"
            style={{ fontFamily: 'Georgia, "Playfair Display", serif', fontStyle: 'italic' }}
          >
            Intelligence.
          </h1>
        </div>

        {/* 3. Subtitle */}
        <p className="animate-fade-in-up stagger-3 text-center text-[16px] text-[#a1a1aa] max-w-[420px] mx-auto leading-relaxed">
          The smartest footballing brain on the internet. 19 leagues. 11-factor AI model. Built for 2026.
        </p>

        {/* 4. Discover Section */}
        <div className="animate-fade-in-up stagger-4 flex flex-col gap-3">
          <span className="text-[11px] uppercase tracking-[0.15em] text-[#3b82f6] font-medium">Discover</span>
          <a
            href="https://app.virtuals.io/acp/service/20501"
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover flex items-center justify-between bg-[#111111] border border-[#1e1e1e] rounded-2xl p-5"
          >
            <div className="flex items-center gap-4">
              <div className="w-[44px] h-[44px] rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center overflow-hidden shrink-0">
                <Image src="/gaffer-pfp-blue.jpg" alt="Gaffer" width={44} height={44} className="rounded-xl" />
              </div>
              <div>
                <div className="font-semibold text-[15px]">The Gaffer</div>
                <div className="text-[13px] text-[#a1a1aa]">19 leagues · 730+ predictions · gaffer.bot</div>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] flex items-center justify-center text-white shrink-0 transition-colors">
              <ArrowUpRight size={18} />
            </div>
          </a>
        </div>

        {/* 5. Content Section */}
        <div className="animate-fade-in-up stagger-5 flex flex-col gap-3">
          <span className="text-[11px] uppercase tracking-[0.15em] text-[#a1a1aa] font-medium">Content</span>
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://x.com/gabormaui"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-[#111111] border border-[#1e1e1e] rounded-[14px] p-4 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-black border border-[#2a2a2a] flex items-center justify-center">
                  <XIcon />
                </div>
                <span className="text-[#a1a1aa]"><ArrowUpRight size={14} /></span>
              </div>
              <div>
                <div className="font-semibold text-[14px]">X / Twitter</div>
                <div className="text-[12px] text-[#a1a1aa]">Predictions &amp; takes</div>
              </div>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-[#111111] border border-[#1e1e1e] rounded-[14px] p-4 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#FF0000] flex items-center justify-center">
                  <YouTubeIcon />
                </div>
                <span className="text-[#a1a1aa]"><ArrowUpRight size={14} /></span>
              </div>
              <div>
                <div className="font-semibold text-[14px]">YouTube</div>
                <div className="text-[12px] text-[#a1a1aa]">The build series</div>
              </div>
            </a>
          </div>
        </div>

        {/* 6. Connect Section */}
        <div className="animate-fade-in-up stagger-6 flex flex-col gap-3">
          <span className="text-[11px] uppercase tracking-[0.15em] text-[#a1a1aa] font-medium">Connect</span>
          <div className="grid grid-cols-3 gap-3">
            <a
              href="https://t.me/gaaborr"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-[#111111] border border-[#1e1e1e] rounded-[14px] p-4 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#229ED9] flex items-center justify-center">
                  <TelegramIcon />
                </div>
                <span className="text-[#a1a1aa]"><ArrowUpRight size={14} /></span>
              </div>
              <div>
                <div className="font-semibold text-[13px]">Telegram</div>
                <div className="text-[11px] text-[#a1a1aa]">Direct message</div>
              </div>
            </a>
            <a
              href="https://app.virtuals.io/acp/service/20501"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-[#111111] border border-[#1e1e1e] rounded-[14px] p-4 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center">
                  <ACPIcon />
                </div>
                <span className="text-[#a1a1aa]"><ArrowUpRight size={14} /></span>
              </div>
              <div>
                <div className="font-semibold text-[13px]">ACP Market</div>
                <div className="text-[11px] text-[#a1a1aa]">Buy intelligence</div>
              </div>
            </a>
            <a
              href="https://github.com/jordymaui/gafferbot"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover bg-[#111111] border border-[#1e1e1e] rounded-[14px] p-4 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                  <GithubIcon />
                </div>
                <span className="text-[#a1a1aa]"><ArrowUpRight size={14} /></span>
              </div>
              <div>
                <div className="font-semibold text-[13px]">GitHub</div>
                <div className="text-[11px] text-[#a1a1aa]">Open source</div>
              </div>
            </a>
          </div>
        </div>

        {/* 7. CTA Card */}
        <a
          href="https://app.virtuals.io/acp/service/20501"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-in-up stagger-7 card-hover flex items-center justify-between bg-[#111111] border border-[#1e1e1e] rounded-2xl p-5"
        >
          <div className="flex items-center gap-4">
            <div className="w-[44px] h-[44px] rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center shrink-0">
              <ChatIcon />
            </div>
            <div>
              <div className="font-semibold text-[15px]">Ask the Gaffer</div>
              <div className="text-[13px] text-[#a1a1aa]">Instant football intelligence · From $0.01</div>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden sm:inline-block bg-[#1e1e1e] text-[#a1a1aa] text-[12px] rounded-full px-3 py-1">$2.00 per query</span>
            <span className="text-[#a1a1aa]"><ArrowUpRight size={16} /></span>
          </div>
        </a>

        {/* 8. Footer */}
        <div className="animate-fade-in-up stagger-8 text-center pt-4">
          <p className="text-[12px] text-[#6b7b90]">gaffer.bot · football intelligence</p>
        </div>

      </div>
    </>
  );
}
