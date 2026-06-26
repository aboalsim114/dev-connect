import { useState } from 'react'
import { Link } from 'react-router-dom'

/* ── Password strength logic ── */
function useStrength(pw) {
  if (!pw) return { pct: '0%', color: '#ECEEE8', label: '' }
  let score = 0
  if (pw.length >= 8)                              score++
  if (pw.length >= 12)                             score++
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw))       score++
  if (/[0-9]/.test(pw))                            score++
  if (/[^A-Za-z0-9]/.test(pw))                    score++
  score = Math.min(Math.max(score, 1), 4)
  return [
    null,
    { pct: '25%',  color: '#EF4444', label: 'Faible' },
    { pct: '50%',  color: '#F59E0B', label: 'Moyen'  },
    { pct: '75%',  color: '#0EA5E9', label: 'Bien'   },
    { pct: '100%', color: '#16A34A', label: 'Solide' },
  ][score]
}

const perks = [
  { title: 'Publie tes snippets',          desc: 'Du code mis en forme, partagé avec la communauté.' },
  { title: 'Suis les devs qui t\'inspirent', desc: 'Un fil d\'actualité taillé pour tes technos.'   },
  { title: 'Échange en temps réel',         desc: 'Messagerie et notifications par WebSocket.'       },
]

export default function Register() {
  const [showPw, setShowPw] = useState(false)
  const [pw, setPw]         = useState('')
  const strength            = useStrength(pw)

  return (
    <div className="flex min-h-screen font-sans antialiased">

      {/* ── Brand panel ── */}
      <div className="relative hidden flex-1 flex-col overflow-hidden bg-ink p-12 text-white lg:flex">
        {/* Dot pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[.16]"
          aria-hidden="true"
          style={{
            backgroundImage: 'radial-gradient(color-mix(in srgb,#BEF264 55%,transparent) 1px,transparent 1px)',
            backgroundSize: '22px 22px',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 35% 30%,#000,transparent 80%)',
            maskImage: 'radial-gradient(ellipse 70% 60% at 35% 30%,#000,transparent 80%)',
          }}
        />

        {/* Logo */}
        <Link to="/" className="relative inline-flex w-fit items-center gap-[11px] text-white no-underline">
          <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-accent font-mono text-[14px] font-bold text-ink">&lt;/&gt;</span>
          <span className="font-display text-[20px] font-semibold tracking-[-0.02em]">DevConnect</span>
        </Link>

        {/* Copy */}
        <div className="relative my-auto max-w-[460px]">
          <h1 className="font-display text-[46px] font-semibold leading-[1.06] tracking-[-0.035em]">
            Rejoins le réseau où ton{' '}
            <span className="relative whitespace-nowrap">
              code
              <span className="absolute -left-0.5 -right-0.5 bottom-[5px] -z-10 h-[11px] rounded-[3px] bg-accent" aria-hidden="true" />
            </span>{' '}
            prend la parole.
          </h1>

          <div className="mt-[34px] flex flex-col gap-[18px]">
            {perks.map(({ title, desc }) => (
              <div key={title} className="flex items-start gap-[13px]">
                <span
                  className="mt-px flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg"
                  style={{ background: 'color-mix(in srgb,#BEF264 26%,transparent)' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#BEF264" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                </span>
                <div>
                  <div className="text-[16px] font-semibold">{title}</div>
                  <div className="mt-0.5 text-[14px] leading-[1.5] text-[#9AA1AD]">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating notif */}
          <div
            className="animate-floaty mt-10 inline-flex items-center gap-[11px] rounded-[13px] bg-white px-[15px] py-3 text-ink"
            style={{ boxShadow: '0 16px 40px -12px rgba(0,0,0,.5)' }}
            aria-hidden="true"
          >
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg" style={{ background: 'color-mix(in srgb,#BEF264 35%,#fff)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B0F17" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/></svg>
            </span>
            <div className="leading-[1.25]">
              <div className="text-[13.5px] font-semibold">maya_dev vient de te suivre</div>
              <div className="text-[11.5px] text-[#8A909C]">à l'instant</div>
            </div>
          </div>
        </div>

        <div className="relative font-mono text-[12px] text-[#5E6776]">
          ESGI — Projet Annuel M4 · Ingénierie du Web · 2025–2026
        </div>
      </div>

      {/* ── Form panel ── */}
      <div className="flex flex-1 items-center justify-center p-8 md:p-10">
        <div className="w-full max-w-[404px]">

          {/* Mobile logo */}
          <Link to="/" className="mb-8 inline-flex items-center gap-[11px] text-ink no-underline lg:hidden">
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-ink font-mono text-[14px] font-bold text-accent">&lt;/&gt;</span>
            <span className="font-display text-[20px] font-semibold tracking-[-0.02em]">DevConnect</span>
          </Link>

          <h2 className="font-display text-[30px] font-semibold tracking-[-0.025em]">Créer ton compte</h2>
          <p className="mt-[9px] text-[15.5px] text-[#5A6170]">Gratuit, et prêt en moins d'une minute.</p>

          {/* GitHub OAuth */}
          <button
            type="button"
            className="mt-[26px] flex w-full items-center justify-center gap-2.5 rounded-[11px] bg-ink px-5 py-[13px] text-[15px] font-semibold text-white transition hover:bg-[#1A2030]"
          >
            <GitHubIcon />
            Continuer avec GitHub
          </button>

          <Divider />

          <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-4">

            {/* Username */}
            <label className="block">
              <span className="mb-[7px] block text-[13.5px] font-semibold">Nom d'utilisateur</span>
              <div className="input-wrapper">
                <span className="font-mono text-[14px] text-[#9AA1AD]">@</span>
                <input type="text" placeholder="maya_dev" />
              </div>
            </label>

            {/* Email */}
            <label className="block">
              <span className="mb-[7px] block text-[13.5px] font-semibold">Email</span>
              <div className="input-wrapper">
                <MailIcon />
                <input type="email" placeholder="toi@exemple.dev" />
              </div>
            </label>

            {/* Password + strength meter */}
            <label className="block">
              <span className="mb-[7px] block text-[13.5px] font-semibold">Mot de passe</span>
              <div className="input-wrapper">
                <LockIcon />
                <input
                  type={showPw ? 'text' : 'password'}
                  placeholder="8 caractères minimum"
                  value={pw}
                  onChange={e => setPw(e.target.value)}
                />
                <button type="button" onClick={() => setShowPw(v => !v)} className="flex p-1 text-[#9AA1AD] transition hover:text-ink">
                  <EyeIcon />
                </button>
              </div>
              {/* Strength bar */}
              <div className="mt-[9px] flex items-center gap-[9px]">
                <div className="h-[5px] flex-1 overflow-hidden rounded-full bg-[#ECEEE8]">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{ width: strength.pct, background: strength.color }}
                  />
                </div>
                <span className="min-w-[64px] text-right text-[12px] font-semibold transition-colors duration-300" style={{ color: strength.color }}>
                  {strength.label}
                </span>
              </div>
            </label>

            {/* Terms */}
            <label className="mt-0.5 flex cursor-pointer items-start gap-2.5">
              <input type="checkbox" className="mt-0.5 h-[17px] w-[17px] shrink-0 cursor-pointer accent-accent" />
              <span className="text-[13px] leading-[1.5] text-[#5A6170]">
                J'accepte les{' '}
                <a href="#" className="font-semibold text-ink underline decoration-accent underline-offset-2">conditions d'utilisation</a>
                {' '}et la{' '}
                <a href="#" className="font-semibold text-ink underline decoration-accent underline-offset-2">politique de confidentialité</a>.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="mt-1 flex w-full items-center justify-center gap-[9px] rounded-[11px] bg-accent py-[14px] text-[16px] font-semibold text-ink transition hover:-translate-y-0.5"
              style={{ boxShadow: '0 6px 20px color-mix(in srgb,#BEF264 45%,transparent)' }}
            >
              Créer mon compte
              <ArrowIcon />
            </button>
          </form>

          <p className="mt-[22px] text-center text-[14px] text-[#5A6170]">
            Déjà un compte ?{' '}
            <Link to="/connexion" className="font-semibold text-ink no-underline hover:underline">Se connecter</Link>
          </p>
        </div>
      </div>

    </div>
  )
}

/* ── Icons & shared ── */
function Divider() {
  return (
    <div className="my-[22px] flex items-center gap-3.5">
      <span className="h-px flex-1 bg-[#E7EAE3]" />
      <span className="text-[12.5px] font-medium text-[#9AA1AD]">ou avec ton email</span>
      <span className="h-px flex-1 bg-[#E7EAE3]" />
    </div>
  )
}
function GitHubIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/>
    </svg>
  )
}
function MailIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9AA1AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 6 9 7 9-7"/></svg>
}
function LockIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9AA1AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
}
function EyeIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
}
function ArrowIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
}
