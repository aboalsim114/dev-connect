export default function CTABand() {
    return (
      <section className="pb-[90px]">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="relative overflow-hidden rounded-3xl bg-ink px-12 py-16 text-center">
            {/* Dot pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[.12]"
              aria-hidden="true"
              style={{
                backgroundImage: 'radial-gradient(color-mix(in srgb,#BEF264 60%,transparent) 1px,transparent 1px)',
                backgroundSize: '22px 22px',
                WebkitMaskImage: 'radial-gradient(ellipse 60% 100% at 50% 50%,#000,transparent 75%)',
                maskImage: 'radial-gradient(ellipse 60% 100% at 50% 50%,#000,transparent 75%)',
              }}
            />
            <div className="relative">
              <h2 className="font-display text-[42px] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
                Prêt à rejoindre la communauté ?
              </h2>
              <p className="mx-auto mb-[30px] mt-4 max-w-[480px] text-[18px] text-[#A9B0BD]">
                Crée ton profil développeur et publie ton premier snippet en moins d'une minute.
              </p>
              <div className="flex flex-wrap justify-center gap-[13px]">
                <a
                  href="#"
                  className="inline-flex items-center gap-[9px] rounded-[11px] bg-accent px-7 py-[15px] text-[16px] font-semibold text-ink no-underline transition hover:-translate-y-0.5 hover:brightness-95"
                >
                  Rejoindre DevConnect
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-[10px] rounded-[11px] border border-[#2A323F] px-[26px] py-[15px] text-[16px] font-semibold text-white no-underline transition hover:bg-[#141A24]"
                >
                  <GitHubIcon />
                  Continuer avec GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function GitHubIcon() {
    return (
      <svg width="19" height="19" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    )
  }
  