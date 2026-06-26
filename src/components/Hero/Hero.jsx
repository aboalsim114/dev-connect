export default function Hero() {
  return (
    <section id="top" className="relative">
      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(#E7EAE3 1px, transparent 1px), linear-gradient(90deg, #E7EAE3 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%, #000 35%, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%, #000 35%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[60px] px-8 py-20 pb-24 md:grid-cols-[1.05fr_.95fr]">

        {/* ── Left: copy ── */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E7EAE3] bg-white px-[14px] py-[7px] text-[13px] font-semibold tracking-[.01em] text-[#3D4453] shadow-sm">
            <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-accent shadow-[0_0_0_4px_color-mix(in_srgb,#BEF264_30%,transparent)]" />
            Réseau social pour développeurs
          </span>

          {/* Headline */}
          <h1 className="mt-6 font-display text-[68px] font-semibold leading-[1.02] tracking-[-0.035em]">
            Le réseau social où ton{" "}
            <span className="relative whitespace-nowrap">
              code
              <span
                className="absolute -left-0.5 -right-0.5 bottom-1.5 -z-10 h-[14px] rounded-[3px] bg-accent"
                aria-hidden="true"
              />
            </span>{" "}
            prend la parole.
          </h1>

          {/* Sub */}
          <p className="mt-6 max-w-[520px] text-[19px] leading-relaxed text-[#444B59]">
            Partage tes snippets, suis les devs qui t'inspirent et échange en
            temps réel. DevConnect réunit ta communauté autour de ce que tu
            construis vraiment.
          </p>

          {/* CTAs */}
          <div className="mt-[34px] flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-[9px] rounded-[11px] bg-accent px-[26px] py-[15px] text-[16px] font-semibold text-ink shadow-[0_6px_20px_color-mix(in_srgb,#BEF264_45%,transparent)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_28px_color-mix(in_srgb,#BEF264_55%,transparent)]"
            >
              Rejoindre DevConnect
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-[10px] rounded-[11px] bg-ink px-[24px] py-[15px] text-[16px] font-semibold text-white transition hover:bg-[#1A2030]"
            >
              <GitHubIcon />
              Continuer avec GitHub
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap gap-[22px] font-mono text-[12.5px] font-medium tracking-[-0.01em] text-[#6A7180]">
            {["Auth JWT sécurisée", "Temps réel WebSocket", "Connexion GitHub"].map((label) => (
              <span key={label} className="inline-flex items-center gap-[7px]">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-[5px] bg-accent text-[10px] text-ink" aria-hidden="true">
                  ✓
                </span>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: editor + floating notifs ── */}
        <div className="relative hidden md:block">
          {/* Editor window */}
          <div className="overflow-hidden rounded-2xl border border-[#1E2530] bg-[#0C1018] shadow-[0_30px_70px_-20px_rgba(11,15,23,.5)]">
            {/* Titlebar */}
            <div className="flex items-center gap-2 border-b border-[#1A212C] bg-[#0E131C] px-4 py-[13px]">
              <span className="h-[11px] w-[11px] rounded-full bg-[#FF5F57]" aria-hidden="true" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#FEBC2E]" aria-hidden="true" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#28C840]" aria-hidden="true" />
              <span className="ml-2.5 font-mono text-[12.5px] text-[#737E8C]">useFollow.jsx</span>
              <span className="ml-auto rounded-[6px] border border-[#232B36] px-2 py-0.5 font-mono text-[11px] text-[#4B5563]">JSX</span>
            </div>
            {/* Code body */}
            <div className="flex font-mono text-[13.5px] leading-[1.85] py-4">
              <div className="select-none border-r border-[#1A212C] px-3.5 text-right text-[#3B4350]" aria-hidden="true">
                {[1,2,3,4,5,6,7,8,9].map(n => <div key={n}>{n}</div>)}
              </div>
              <pre className="overflow-auto px-[18px] text-[#C9D1D9]">{codeLines}</pre>
            </div>
          </div>

          {/* Notif: like */}
          <div className="absolute -top-[22px] -right-[14px] flex animate-[floaty_5.5s_ease-in-out_infinite] items-center gap-2.5 rounded-[13px] border border-[#ECEEE8] bg-white p-[11px_14px] shadow-[0_14px_34px_-10px_rgba(15,20,30,.22)]" aria-hidden="true">
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-[#FFE4EC] text-[15px]">❤️</span>
            <div className="leading-[1.25]">
              <div className="text-[13px] font-semibold">maya a aimé ton post</div>
              <div className="text-[11.5px] text-[#8A909C]">à l'instant</div>
            </div>
          </div>

          {/* Notif: followers */}
          <div className="absolute bottom-[34px] -left-[30px] flex animate-[floaty2_6.5s_ease-in-out_infinite] items-center gap-2.5 rounded-[13px] border border-[#ECEEE8] bg-white p-[11px_14px] shadow-[0_14px_34px_-10px_rgba(15,20,30,.22)]" aria-hidden="true">
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-[color-mix(in_srgb,#BEF264_35%,#fff)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B0F17" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/></svg>
            </span>
            <div className="leading-[1.25]">
              <div className="text-[13px] font-semibold">+3 nouveaux abonnés</div>
              <div className="text-[11.5px] text-[#8A909C]">cette semaine</div>
            </div>
          </div>

          {/* Notif: message */}
          <div className="absolute -bottom-[18px] right-6 flex animate-[floaty3_5s_ease-in-out_infinite] items-center gap-2.5 rounded-[13px] bg-ink p-[11px_14px] text-white shadow-[0_14px_34px_-10px_rgba(15,20,30,.3)]" aria-hidden="true">
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-[#1B2230]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </span>
            <div className="leading-[1.25]">
              <div className="text-[13px] font-semibold">Nouveau message</div>
              <div className="text-[11.5px] text-[#9AA2B0]">« on ship ce soir ? »</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

const GitHubIcon = () => (
  <svg width="19" height="19" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const codeLines = `// posté par @maya_dev · il y a 2 min
function useFollow(userId) {
  const [following, setFollowing] = useState(false)
  const toggle = async () => {
    await api.post(\`/follow/\${userId}\`)
    setFollowing(f => !f)
  }
  return { following, toggle }
}`;
