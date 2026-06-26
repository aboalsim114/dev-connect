import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [showPw, setShowPw] = useState(false)

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

        {/* Copy + pulse card */}
        <div className="relative my-auto max-w-[440px]">
          <h1 className="font-display text-[46px] font-semibold leading-[1.06] tracking-[-0.035em]">
            Content de te{' '}
            <span className="relative whitespace-nowrap">
              revoir
              <span className="absolute -left-0.5 -right-0.5 bottom-[5px] -z-10 h-[11px] rounded-[3px] bg-accent" aria-hidden="true" />
            </span>.
          </h1>
          <p className="mt-[18px] text-[17px] leading-relaxed text-[#9AA1AD]">
            Voici ce qui s'est passé pendant ton absence.
          </p>

          {/* Community pulse card */}
          <div className="animate-floaty mt-7 rounded-[18px] border border-[#222A36] bg-[#10151E] p-[22px]" style={{ boxShadow: '0 24px 60px -30px rgba(0,0,0,.6)' }}>
            {/* Avatars + badge */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center">
                {[
                  { label: 'M', bg: 'linear-gradient(135deg,#BEF264,#22D3EE)', color: '#0B0F17' },
                  { label: 'L', bg: 'linear-gradient(135deg,#6366F1,#22D3EE)', color: '#fff'    },
                  { label: 'S', bg: 'linear-gradient(135deg,#F472B6,#F59E0B)', color: '#fff'    },
                ].map(({ label, bg, color }, i) => (
                  <span
                    key={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#10151E] font-display text-[14px] font-bold"
                    style={{ background: bg, color, marginLeft: i > 0 ? -11 : 0 }}
                  >{label}</span>
                ))}
                <span className="ml-[-11px] flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#10151E] bg-[#1B2230] font-mono text-[12px] font-semibold text-[#9AA1AD]">+9</span>
              </div>
              <span className="inline-flex items-center gap-[6px] rounded-full px-[10px] py-[5px] font-mono text-[11px] font-semibold text-accent" style={{ background: 'color-mix(in srgb,#BEF264 14%,transparent)' }}>
                <span className="h-[6px] w-[6px] rounded-full bg-accent" />
                EN DIRECT
              </span>
            </div>

            <p className="mt-4 text-[14.5px] leading-[1.5] text-[#C4CAD4]">
              <b className="text-white">Maya</b>, <b className="text-white">Liam</b> et 10 autres ont interagi avec toi depuis ta dernière visite.
            </p>

            {/* Counters */}
            <div className="mt-[18px] flex gap-2.5">
              {[
                { val: '12', sub: 'J\'aime',  color: 'text-white'  },
                { val: '+4', sub: 'Abonnés',  color: 'text-white'  },
                { val: '3',  sub: 'Messages', color: 'text-accent' },
              ].map(({ val, sub, color }) => (
                <div key={sub} className="flex-1 rounded-[11px] bg-[#161D28] px-3 py-[13px]">
                  <div className={`font-display text-[22px] font-semibold leading-none ${color}`}>{val}</div>
                  <div className="mt-[5px] text-[11.5px] text-[#7A828F]">{sub}</div>
                </div>
              ))}
            </div>

            {/* Message preview */}
            <div className="mt-3.5 flex items-center gap-[11px] rounded-[12px] bg-[#161D28] px-[14px] py-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-[13px] font-bold text-white" style={{ background: 'linear-gradient(135deg,#6366F1,#22D3EE)' }}>L</span>
              <div className="min-w-0 flex-1 leading-[1.35]">
                <div className="text-[13px] text-[#E6EAF0]"><b className="text-white">liam_ok</b></div>
                <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[13px] text-[#9AA1AD]">« on ship ce soir ? 🚀 »</div>
              </div>
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent font-bold text-[11px] text-ink">2</span>
            </div>
          </div>
        </div>

        <div className="relative font-mono text-[12px] text-[#5E6776]">
          ESGI — Projet Annuel M4 · Ingénierie du Web · 2025–2026
        </div>
      </div>

      {/* ── Form panel ── */}
      <div className="flex flex-1 items-center justify-center p-8 md:p-10">
        <div className="w-full max-w-[392px]">

          {/* Mobile logo */}
          <Link to="/" className="mb-8 inline-flex items-center gap-[11px] text-ink no-underline lg:hidden">
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-ink font-mono text-[14px] font-bold text-accent">&lt;/&gt;</span>
            <span className="font-display text-[20px] font-semibold tracking-[-0.02em]">DevConnect</span>
          </Link>

          <h2 className="font-display text-[30px] font-semibold tracking-[-0.025em]">Se connecter</h2>
          <p className="mt-[9px] text-[15.5px] text-[#5A6170]">Reprends là où tu t'étais arrêté.</p>

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
            {/* Email */}
            <label className="block">
              <span className="mb-[7px] block text-[13.5px] font-semibold">Email ou nom d'utilisateur</span>
              <div className="input-wrapper">
                <MailIcon />
                <input type="text" placeholder="toi@exemple.dev" />
              </div>
            </label>

            {/* Password */}
            <label className="block">
              <span className="mb-[7px] flex items-center justify-between text-[13.5px] font-semibold">
                Mot de passe
                <a href="#" className="text-[13px] font-semibold text-[#5A6170] no-underline hover:text-ink hover:underline">Oublié ?</a>
              </span>
              <div className="input-wrapper">
                <LockIcon />
                <input type={showPw ? 'text' : 'password'} placeholder="Ton mot de passe" />
                <button type="button" onClick={() => setShowPw(v => !v)} className="flex p-1 text-[#9AA1AD] transition hover:text-ink">
                  <EyeIcon />
                </button>
              </div>
            </label>

            {/* Remember me */}
            <label className="flex cursor-pointer items-center gap-2.5">
              <input type="checkbox" className="h-[17px] w-[17px] shrink-0 cursor-pointer accent-accent" />
              <span className="text-[13.5px] text-[#5A6170]">Rester connecté sur cet appareil</span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="mt-1 flex w-full items-center justify-center gap-[9px] rounded-[11px] bg-accent py-[14px] text-[16px] font-semibold text-ink transition hover:-translate-y-0.5"
              style={{ boxShadow: '0 6px 20px color-mix(in srgb,#BEF264 45%,transparent)' }}
            >
              Se connecter
              <ArrowIcon />
            </button>
          </form>

          <p className="mt-[22px] text-center text-[14px] text-[#5A6170]">
            Pas encore de compte ?{' '}
            <Link to="/rejoindre" className="font-semibold text-ink no-underline hover:underline">Rejoindre DevConnect</Link>
          </p>
        </div>
      </div>

    </div>
  )
}

/* ── Shared small components ── */
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
