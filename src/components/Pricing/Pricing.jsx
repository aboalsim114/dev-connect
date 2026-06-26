import { useState } from 'react'

const plans = [
  {
    name: 'Gratuit',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Pour découvrir DevConnect et rejoindre la communauté.',
    cta: 'Commencer gratuitement',
    ctaStyle: 'outline',
    features: [
      { text: 'Profil développeur public',       included: true  },
      { text: '5 snippets par mois',              included: true  },
      { text: 'Feed & follow illimités',          included: true  },
      { text: 'Messagerie (5 conversations)',      included: true  },
      { text: 'Notifications temps réel',         included: true  },
      { text: 'Connexion GitHub OAuth',           included: true  },
      { text: 'Snippets privés',                  included: false },
      { text: 'Statistiques avancées',            included: false },
      { text: 'Badge Pro & profil mis en avant',  included: false },
      { text: 'Support prioritaire',              included: false },
    ],
  },
  {
    name: 'Pro',
    monthlyPrice: 9,
    yearlyPrice: 7,
    badge: 'Le plus populaire',
    description: 'Pour les devs qui veulent maximiser leur visibilité.',
    cta: 'Passer à Pro',
    ctaStyle: 'accent',
    features: [
      { text: 'Profil développeur public',       included: true },
      { text: 'Snippets illimités',               included: true },
      { text: 'Feed & follow illimités',          included: true },
      { text: 'Messagerie illimitée',             included: true },
      { text: 'Notifications temps réel',         included: true },
      { text: 'Connexion GitHub OAuth',           included: true },
      { text: 'Snippets privés & brouillons',     included: true },
      { text: 'Statistiques avancées',            included: true },
      { text: 'Badge Pro & profil mis en avant',  included: true },
      { text: 'Support prioritaire',              included: true },
    ],
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="relative overflow-hidden py-[110px]">
      {/* Décor : motif grille + halo accent */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(#E7EAE3 1px,transparent 1px),linear-gradient(90deg,#E7EAE3 1px,transparent 1px)',
          backgroundSize: '46px 46px',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%,#000 30%,transparent 72%)',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%,#000 30%,transparent 72%)',
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[-120px] h-[420px] w-[760px] -translate-x-1/2 rounded-full blur-[120px]"
        aria-hidden="true"
        style={{ background: 'color-mix(in srgb,#BEF264 28%,transparent)' }}
      />

      <div className="relative mx-auto max-w-[1200px] px-8">

        {/* Header */}
        <div className="mx-auto max-w-[680px] text-center">
          <span className="font-mono text-[13px] font-semibold uppercase tracking-[.04em] text-[#7A8190]">
            // Abonnements
          </span>
          <h2 className="mt-[14px] font-display text-[44px] font-semibold leading-[1.08] tracking-[-0.03em]">
            Simple, transparent, sans surprise.
          </h2>
          <p className="mt-4 text-[18px] leading-relaxed text-[#525968]">
            Commence gratuitement, passe à Pro quand tu veux briller dans la communauté.
          </p>
        </div>

        {/* Toggle mensuel / annuel */}
        <div className="mt-9 flex items-center justify-center gap-4">
          <span className={`text-[15px] font-medium transition-colors ${!annual ? 'text-ink' : 'text-[#8A909C]'}`}>
            Mensuel
          </span>
          <button
            onClick={() => setAnnual(v => !v)}
            role="switch"
            aria-checked={annual}
            className="relative h-7 w-12 rounded-full transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[color-mix(in_srgb,#BEF264_30%,transparent)]"
            style={{ background: annual ? '#BEF264' : '#D1D5DB' }}
          >
            <span
              className="absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-all duration-200"
              style={{ left: annual ? '22px' : '2px' }}
            />
          </button>
          <span className={`text-[15px] font-medium transition-colors ${annual ? 'text-ink' : 'text-[#8A909C]'}`}>
            Annuel
          </span>
          <span className="inline-flex items-center rounded-full bg-[color-mix(in_srgb,#BEF264_22%,transparent)] px-[10px] py-[4px] font-mono text-[12px] font-semibold text-ink">
            −22% 🎉
          </span>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-14 grid max-w-[840px] grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          {plans.map(plan => (
            <PlanCard key={plan.name} plan={plan} annual={annual} />
          ))}
        </div>

        {/* Reassurance */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[12.5px] text-[#6A7180]">
          {[
            'Annulation à tout moment',
            'Paiement sécurisé via Stripe',
            'Pas de carte requise pour le plan gratuit',
          ].map(item => (
            <span key={item} className="inline-flex items-center gap-2">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] bg-accent text-[10px] text-ink" aria-hidden="true">✓</span>
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}

function PlanCard({ plan, annual }) {
  const isPro = plan.ctaStyle === 'accent'
  const price = annual ? plan.yearlyPrice : plan.monthlyPrice

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 transition duration-300 ${
        isPro
          ? 'bg-ink text-white shadow-[0_40px_80px_-24px_rgba(11,15,23,.55)] ring-1 ring-[#1C232F] lg:-translate-y-3 lg:scale-[1.02]'
          : 'border border-[#ECEEE8] bg-white/90 backdrop-blur-sm hover:-translate-y-1 hover:border-[#DDE0D8] hover:shadow-[0_24px_50px_-28px_rgba(15,20,30,.25)]'
      }`}
    >
      {/* Badge */}
      {plan.badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1 font-mono text-[12px] font-semibold text-ink whitespace-nowrap shadow-[0_8px_24px_-8px_color-mix(in_srgb,#BEF264_70%,transparent)]">
          ★ {plan.badge}
        </span>
      )}

      {/* Plan name */}
      <div className="flex items-center gap-3">
        <span className={`font-display text-[18px] font-semibold ${isPro ? 'text-white' : 'text-ink'}`}>
          {plan.name}
        </span>
        {isPro && (
          <span className="rounded-full bg-[color-mix(in_srgb,#BEF264_18%,transparent)] px-3 py-0.5 font-mono text-[11px] font-semibold text-accent">
            PRO
          </span>
        )}
      </div>

      {/* Price */}
      <div className="mt-5 flex items-end gap-1.5">
        <span className={`font-display text-[52px] font-semibold leading-none tracking-[-0.04em] ${isPro ? 'text-white' : 'text-ink'}`}>
          {price === 0 ? '0' : `${price}`}
          <span className="text-[28px]">€</span>
        </span>
        <span className={`mb-2 text-[15px] ${isPro ? 'text-[#7A828F]' : 'text-[#9AA1AD]'}`}>
          / mois
        </span>
      </div>

      {/* Note facturation annuelle (hauteur réservée pour aligner les cartes) */}
      <div className="mt-2 h-[18px]">
        {annual && price > 0 && (
          <span className={`font-mono text-[12px] ${isPro ? 'text-accent' : 'text-[#6A7180]'}`}>
            facturé {price * 12}€ / an · 2 mois offerts
          </span>
        )}
      </div>

      {/* Description */}
      <p className={`mt-3 text-[15px] leading-relaxed ${isPro ? 'text-[#9AA1AD]' : 'text-[#5A6170]'}`}>
        {plan.description}
      </p>

      {/* Divider */}
      <div className={`my-6 h-px ${isPro ? 'bg-[#1C232F]' : 'bg-[#ECEEE8]'}`} />

      {/* Features */}
      <ul className="flex flex-col gap-[13px]">
        {plan.features.map(({ text, included }) => (
          <li key={text} className="flex items-start gap-3">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] ${
                included
                  ? 'bg-accent text-ink'
                  : isPro
                  ? 'bg-[#1B2230] text-[#4B5563]'
                  : 'bg-[#F1F3ED] text-[#C4C9D0]'
              }`}
              aria-hidden="true"
            >
              {included
                ? <CheckIcon />
                : <CrossIcon />
              }
            </span>
            <span className={`text-[14.5px] ${
              included
                ? isPro ? 'text-[#E6EAF0]' : 'text-[#2C313C]'
                : isPro ? 'text-[#4B5563]'  : 'text-[#A0A7B3]'
            }`}>
              {text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto pt-8">
        {isPro ? (
          <button
            className="flex w-full items-center justify-center gap-2 rounded-[11px] bg-accent py-[14px] text-[15px] font-semibold text-ink transition hover:-translate-y-0.5"
            style={{ boxShadow: '0 6px 20px color-mix(in srgb,#BEF264 40%,transparent)' }}
          >
            {plan.cta}
            <ArrowIcon />
          </button>
        ) : (
          <button className="flex w-full items-center justify-center gap-2 rounded-[11px] border border-[#DDE0D8] py-[14px] text-[15px] font-semibold text-ink transition hover:bg-[#F1F3ED]">
            {plan.cta}
          </button>
        )}
      </div>
    </div>
  )
}

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
function CrossIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
