import { useState } from "react";

/**
 * Section Abonnement (Freemium) — DevConnect
 * React + TailwindCSS — portage 1:1 du prototype HTML.
 *
 * Config requise (tailwind.config.js → theme.extend) :
 *   fontFamily: {
 *     display: ['"Space Grotesk"', "sans-serif"],
 *     sans:    ['"Hanken Grotesk"', "system-ui", "sans-serif"],
 *     mono:    ['"JetBrains Mono"', "monospace"],
 *   },
 *   colors: { accent: "#BEF264", ink: "#0B0F17" },
 *
 * Fonts (index.html) :
 *   https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700
 *     &family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap
 */

const Check = ({ className = "" }) => (
  <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const Arrow = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const freeFeatures = [
  "Profil développeur & feed de snippets",
  "Follow & messagerie temps réel",
  "Notifications instantanées",
  "Connexion GitHub OAuth",
];

const proFeatures = [
  "Badge Pro & profil mis en avant",
  "Statistiques avancées sur tes posts",
  "Snippets épinglés & thèmes de code",
  "Messages illimités & envois de fichiers",
  "Accès anticipé aux nouveautés",
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  const proPrice = yearly ? "3,90" : "4,90";
  const proPeriod = yearly ? "/ mois · facturé annuellement" : "/ mois";

  return (
    <section id="pricing" className="bg-[#FBFCFA] font-sans pt-[90px] pb-[30px]">
      <div className="mx-auto max-w-[1200px] px-8">
        {/* En-tête */}
        <div className="mx-auto max-w-[680px] text-center">
          <span className="font-mono text-[13px] font-semibold uppercase tracking-[0.04em] text-[#7A8190]">
            // Abonnement
          </span>
          <h2 className="mt-3.5 font-display text-[44px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
            Commence gratuitement, passe Pro quand tu veux.
          </h2>
          <p className="mt-4 text-[18px] leading-[1.6] text-[#525968]">
            Le réseau reste 100&nbsp;% gratuit. DevConnect&nbsp;Pro débloque des
            fonctionnalités premium pour les devs qui veulent aller plus loin.
          </p>
        </div>

        {/* Toggle périodicité */}
        <div className="mt-[30px] flex items-center justify-center gap-3.5">
          <span className={`text-[14.5px] font-semibold ${yearly ? "text-[#8A909C]" : "text-ink"}`}>
            Mensuel
          </span>
          <button
            onClick={() => setYearly((y) => !y)}
            aria-label="Changer la périodicité"
            className="relative h-[30px] w-[54px] flex-none rounded-full border border-[#DDE0D8] bg-white p-0"
          >
            <span
              className="absolute left-[3px] top-[3px] h-[22px] w-[22px] rounded-full bg-accent transition-transform duration-[250ms] ease-[cubic-bezier(.2,.7,.2,1)]"
              style={{ transform: yearly ? "translateX(24px)" : "translateX(0)" }}
            />
          </button>
          <span className={`text-[14.5px] font-semibold ${yearly ? "text-ink" : "text-[#8A909C]"}`}>
            Annuel
          </span>
          <span className="rounded-full bg-accent px-[9px] py-1 font-mono text-[11.5px] font-semibold text-ink">
            -20%
          </span>
        </div>

        {/* Grille des plans */}
        <div className="mx-auto mt-10 grid max-w-[860px] grid-cols-1 gap-5 md:grid-cols-2">
          {/* FREE */}
          <div className="rounded-[20px] border border-[#ECEEE8] bg-white p-8">
            <div className="flex items-center gap-2.5">
              <span className="font-display text-[20px] font-semibold text-ink">Gratuit</span>
              <span className="rounded-full bg-[#F1F3ED] px-2.5 py-1 font-mono text-[11.5px] text-[#6A7180]">
                Pour toujours
              </span>
            </div>
            <p className="mt-2.5 text-[14.5px] leading-[1.5] text-[#5A6170]">
              L'essentiel pour rejoindre la communauté et publier ton code.
            </p>
            <div className="my-[22px] flex items-baseline gap-1.5">
              <span className="font-display text-[46px] font-semibold tracking-[-0.03em] text-ink">0&nbsp;€</span>
              <span className="text-[15px] text-[#8A909C]">/ mois</span>
            </div>
            <a
              href="#"
              className="flex items-center justify-center rounded-[11px] border border-[#DDE0D8] bg-white p-[13px] text-[15px] font-semibold text-ink transition-colors hover:bg-[#F1F3ED]"
            >
              Créer un compte
            </a>
            <div className="my-6 h-px bg-[#ECEEE8]" />
            <ul className="flex flex-col gap-[13px]">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-[11px]">
                  <span className="mt-px flex h-5 w-5 flex-none items-center justify-center rounded-md bg-[#F1F3ED] text-ink">
                    <Check />
                  </span>
                  <span className="text-[14.5px] text-[#3D4453]">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PRO */}
          <div className="relative overflow-hidden rounded-[20px] bg-ink p-8 text-white shadow-[0_30px_70px_-30px_rgba(11,15,23,0.5)]">
            {/* motif décoratif */}
            <div
              className="pointer-events-none absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(color-mix(in srgb,#BEF264 60%,transparent) 1px,transparent 1px)",
                backgroundSize: "22px 22px",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 60% at 70% 0%,#000,transparent 70%)",
                maskImage:
                  "radial-gradient(ellipse 80% 60% at 70% 0%,#000,transparent 70%)",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-2.5">
                <span className="font-display text-[20px] font-semibold">
                  DevConnect <span className="text-accent">Pro</span>
                </span>
                <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[11.5px] font-semibold text-ink">
                  Populaire
                </span>
              </div>
              <p className="mt-2.5 text-[14.5px] leading-[1.5] text-[#A9B0BD]">
                Pour les devs qui veulent plus de visibilité et d'outils.
              </p>
              <div className="my-[22px] flex items-baseline gap-1.5">
                <span className="font-display text-[46px] font-semibold tracking-[-0.03em]">
                  {proPrice}&nbsp;€
                </span>
                <span className="text-[15px] text-[#8A909C]">{proPeriod}</span>
              </div>
              <a
                href="#"
                className="flex items-center justify-center gap-2 rounded-[11px] bg-accent p-[13px] text-[15px] font-semibold text-ink shadow-[0_6px_20px_color-mix(in_srgb,#BEF264_40%,transparent)] transition-transform hover:-translate-y-0.5"
              >
                Passer à Pro
                <Arrow />
              </a>
              <div className="my-6 h-px bg-[#1C232F]" />
              <div className="mb-3.5 font-mono text-[12.5px] font-semibold text-[#7A828F]">
                TOUT LE GRATUIT, PLUS&nbsp;:
              </div>
              <ul className="flex flex-col gap-[13px]">
                {proFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-[11px]">
                    <span className="mt-px flex h-5 w-5 flex-none items-center justify-center rounded-md text-accent"
                          style={{ background: "color-mix(in srgb,#BEF264 26%,transparent)" }}>
                      <Check />
                    </span>
                    <span className="text-[14.5px] text-[#E6EAF0]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-[22px] text-center text-[13.5px] text-[#8A909C]">
          Sans engagement · Annulable à tout moment · Tarif étudiant disponible
        </p>
      </div>
    </section>
  );
}
