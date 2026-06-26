const checks = [
  { title: 'Coloration syntaxique intégrée', desc: "Le code reste lisible, dans le langage que tu publies." },
  { title: 'Réactions & commentaires', desc: "L'échange autour du code, directement sous le post." },
  { title: 'Suivi en un clic', desc: "Abonne-toi à l'auteur sans quitter ton fil." },
]
  
  export default function FeedPreview() {
    return (
      <section id="feed" className="py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-8 md:grid-cols-[.92fr_1.08fr]">
  
          {/* Left: copy */}
          <div>
            <span className="font-mono text-[13px] font-semibold uppercase tracking-[.04em] text-[#7A8190]">// Aperçu</span>
            <h2 className="mt-[14px] font-display text-[44px] font-semibold leading-[1.08] tracking-[-0.03em]">
              Un feed pensé pour le code.
            </h2>
            <p className="mb-[26px] mt-4 text-[18px] leading-relaxed text-[#525968]">
              Chaque post peut embarquer un snippet mis en forme. On lit, on like, on commente, on suit l'auteur — l'essentiel d'un réseau, version développeur.
            </p>
            <div className="flex flex-col gap-[14px]">
              {checks.map(({ title, desc }) => (
                <div key={title} className="flex gap-[13px]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[7px]" style={{ background: 'color-mix(in srgb,#BEF264 28%,transparent)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B0F17" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </span>
                  <div>
                    <div className="text-[16px] font-semibold">{title}</div>
                    <div className="text-[14.5px] text-[#5A6170]">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Right: post card */}
          <div className="rounded-[18px] border border-[#ECEEE8] bg-white p-[22px]" style={{ boxShadow: '0 24px 60px -30px rgba(15,20,30,.3)' }}>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-base font-bold text-white" style={{ background: 'linear-gradient(135deg,#22D3EE,#6366F1)' }}>M</span>
              <div className="leading-[1.3]">
                <div className="text-[15.5px] font-semibold">Maya Diallo <span className="font-normal text-[#9AA1AD]">@maya_dev</span></div>
                <div className="text-[13px] text-[#9AA1AD]">il y a 2 min · React · Hooks</div>
              </div>
              <button className="ml-auto rounded-[9px] bg-accent px-4 py-2 text-[13.5px] font-semibold text-ink transition hover:brightness-95">
                + Suivre
              </button>
            </div>
  
            <p className="my-4 text-[15.5px] leading-[1.55] text-[#2C313C]">
              Petit hook réutilisable pour gérer le follow optimiste 👇 simple et efficace.
            </p>
  
            <div className="overflow-auto rounded-[12px] border border-[#1A212C] bg-[#0C1018] p-[15px_16px] font-mono text-[12.5px] leading-[1.75] text-[#C9D1D9]">
              <pre className="m-0">
                <span style={{ color: '#22D3EE' }}>const</span>{' toggle = '}<span style={{ color: '#22D3EE' }}>async</span>{' () => {\n'}
                {'  '}<span style={{ color: '#22D3EE' }}>await</span>{' api.'}<span style={{ color: '#BEF264' }}>post</span>{'('}<span style={{ color: '#FBBF24' }}>{'/follow/${id}'}</span>{')\n'}
                {'  '}<span style={{ color: '#BEF264' }}>setFollowing</span>{'(f => !f)\n'}
                {'}'}
              </pre>
            </div>
  
            <div className="mt-4 flex items-center gap-6 text-[14px] font-medium text-[#6A7180]">
              <span className="inline-flex items-center gap-[7px]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>
                248
              </span>
              <span className="inline-flex items-center gap-[7px]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                31
              </span>
              <span className="inline-flex items-center gap-[7px]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8"/><path d="M16 6l-4-4-4 4M12 2v14"/></svg>
                Partager
              </span>
            </div>
          </div>
  
        </div>
      </section>
    )
  }
  