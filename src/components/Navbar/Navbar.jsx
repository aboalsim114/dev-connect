import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Aperçu',          href: '#feed'     },
  { label: 'Temps réel',      href: '#realtime' },
  { label: 'Stack',           href: '#stack'    },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#ECEEE8] bg-[#FBFCFA]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-8 py-3.5">

        {/* Logo */}
        <a href="#top" className="flex items-center gap-[11px] text-ink no-underline">
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-ink font-mono text-[13px] font-bold text-accent">
            &lt;/&gt;
          </span>
          <span className="font-display text-[19px] font-semibold tracking-[-0.02em]">DevConnect</span>
        </a>

        {/* Nav links – desktop */}
        <nav className="hidden items-center gap-[30px] text-[15px] font-medium text-[#3D4453] md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink no-underline">{l.label}</a>
          ))}
        </nav>

        {/* Actions – desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="flex items-center gap-2 rounded-[9px] border border-[#DDE0D8] px-3.5 py-2 text-[14px] font-semibold text-ink no-underline transition-colors hover:bg-[#F1F3ED]"
          >
            <GitHubIcon />
            GitHub
          </a>
          <Link
            to="/rejoindre"
            className="rounded-[9px] bg-accent px-[18px] py-2.5 text-[14px] font-semibold text-ink no-underline transition hover:brightness-95"
          >
            Rejoindre
          </Link>
        
        </div>

        {/* Burger – mobile */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#DDE0D8] md:hidden"
        >
          {open
            ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#ECEEE8] bg-[#FBFCFA] px-8 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-[15px] font-medium text-[#3D4453]">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-ink no-underline">{l.label}</a>
            ))}
            <Link to="/rejoindre" className="mt-2 rounded-[9px] bg-accent px-[18px] py-2.5 text-center font-semibold text-ink no-underline">
              Rejoindre
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

function GitHubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/>
    </svg>
  )
}
