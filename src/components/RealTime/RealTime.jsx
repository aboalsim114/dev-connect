const tags = ['Django Channels', 'Daphne', 'Redis 7', 'WebSocket']

const messages = [
  { self: false, text: 'T\'as vu la PR sur le feed ? 👀' },
  { self: true,  text: 'Oui je review là, ça part en prod ce soir' },
  { self: false, text: 'Let\'s gooo 🚀' },
]

export default function RealTime() {
  return (
    <section id="realtime" className="bg-ink py-24 text-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[60px] px-8 md:grid-cols-2">

        {/* Left: copy */}
        <div>
          <span className="font-mono text-[13px] font-semibold uppercase tracking-[.04em] text-accent">// Temps réel</span>
          <h2 className="mt-[14px] font-display text-[46px] font-semibold leading-[1.06] tracking-[-0.03em]">
            Le temps réel, par défaut.
          </h2>
          <p className="mb-7 mt-[18px] max-w-[480px] text-[18px] leading-relaxed text-[#A9B0BD]">
            Messagerie directe et notifications poussées en direct. Pas de polling, pas de rafraîchissement — une connexion WebSocket tenue par Django Channels.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {tags.map(tag => (
              <span key={tag} className="rounded-[9px] border border-[#232B36] bg-[#141A24] px-[13px] py-2 font-mono text-[12.5px] text-[#C9D1D9]">{tag}</span>
            ))}
          </div>
        </div>

        {/* Right: chat mock */}
        <div className="relative">
          <div className="overflow-hidden rounded-[18px] border border-[#222A36] bg-[#10151E]" style={{ boxShadow: '0 30px 70px -30px rgba(0,0,0,.6)' }}>
            {/* Header */}
            <div className="flex items-center gap-[11px] border-b border-[#1C232F] px-[18px] py-[15px]">
              <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full font-display font-bold text-ink" style={{ background: 'linear-gradient(135deg,#BEF264,#22D3EE)' }}>L</span>
              <div className="leading-[1.3]">
                <div className="text-[15px] font-semibold text-white">Liam Okafor</div>
                <div className="flex items-center gap-[5px] text-[12px] text-[#5BD68A]">
                  <span className="h-[7px] w-[7px] rounded-full bg-[#34D399]" />
                  en ligne
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex flex-col gap-3 p-[20px_18px]">
              {messages.map(({ self, text }, i) => (
                <div
                  key={i}
                  className={`max-w-[78%] rounded-[14px] p-[11px_14px] text-[14px] leading-[1.45] ${
                    self
                      ? 'self-end rounded-br-[4px] bg-accent font-medium text-ink'
                      : 'self-start rounded-bl-[4px] bg-[#1A2230] text-[#E6EAF0]'
                  }`}
                >
                  {text}
                </div>
              ))}
              {/* Typing indicator */}
              <div className="flex self-start items-center gap-[5px] rounded-[14px] bg-[#1A2230] p-[13px_15px]" aria-label="En train d'écrire…">
                {[0, 0.2, 0.4].map((delay, i) => (
                  <span key={i} className="animate-typing h-[7px] w-[7px] rounded-full bg-[#8A93A3]" style={{ animationDelay: `${delay}s` }} aria-hidden="true" />
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="flex items-center gap-2.5 border-t border-[#1C232F] p-[13px_16px]">
              <div className="flex-1 rounded-[10px] border border-[#222A36] bg-[#0C1018] px-[13px] py-2.5 text-[13.5px] text-[#5C6573]">Écris un message…</div>
              <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px] bg-accent" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B0F17" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/></svg>
              </span>
            </div>
          </div>

          {/* Floating notif */}
          <div className="animate-floaty absolute -right-4 -top-5 flex items-center gap-2.5 rounded-[12px] bg-white p-[10px_13px] text-ink" style={{ boxShadow: '0 16px 36px -10px rgba(0,0,0,.5)' }} aria-hidden="true">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFE4EC] text-[14px]">❤️</span>
            <div className="text-[12.5px] leading-[1.25]">
              <div className="font-semibold">+12 likes</div>
              <div className="text-[11px] text-[#8A909C]">sur ton snippet</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
