const produit = [
    { label: 'Fonctionnalités', href: '#features' },
    { label: 'Aperçu du feed',  href: '#feed'     },
    { label: 'Temps réel',      href: '#realtime' },
    { label: 'Stack technique', href: '#stack'    },
  ]
  
  const ressources = [
    { label: 'Documentation API',    href: '#' },
    { label: 'Dépôt GitHub',         href: '#' },
    { label: 'Guide de contribution', href: '#' },
  ]
  
  const compte = [
    { label: 'Se connecter',     href: '#' },
    { label: 'Connexion GitHub', href: '#' },
    { label: 'Créer un compte',  href: '#' },
  ]
  
  export default function Footer() {
    return (
      <footer className="bg-ink pt-[60px] pb-8 text-white">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-2 gap-10 border-b border-[#1C232F] pb-11 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
  
            {/* Brand */}
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-[11px]">
                <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-accent font-mono text-[13px] font-bold text-ink">
                  &lt;/&gt;
                </span>
                <span className="font-display text-[19px] font-semibold tracking-[-0.02em]">DevConnect</span>
              </div>
              <p className="mt-4 max-w-[300px] text-[14.5px] leading-relaxed text-[#8A929F]">
                Le réseau social où les développeurs partagent leur code, se suivent et échangent en temps réel.
              </p>
            </div>
  
            {/* Produit */}
            <FooterCol title="Produit" links={produit} />
  
            {/* Ressources */}
            <FooterCol title="Ressources" links={ressources} />
  
            {/* Compte */}
            <FooterCol title="Compte" links={compte} />
          </div>
  
          <div className="flex flex-wrap items-center justify-between gap-3.5 pt-6 text-[13px] text-[#6E7785]">
            <span className="font-mono">ESGI — Projet Annuel M4 · Ingénierie du Web · 2025–2026</span>
            <span>DevConnect est un projet étudiant — non affilié à GitHub.</span>
          </div>
        </div>
      </footer>
    )
  }
  
  function FooterCol({ title, links }) {
    return (
      <div>
        <div className="mb-[14px] text-[13px] font-semibold text-white">{title}</div>
        <div className="flex flex-col gap-[11px] text-[14px] text-[#8A929F]">
          {links.map(({ label, href }) => (
            <a key={label} href={href} className="no-underline transition-colors hover:text-white">{label}</a>
          ))}
        </div>
      </div>
    )
  }
  