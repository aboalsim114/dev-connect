const features = [
  {
    icon: (
      <svg
        width="23"
        height="23"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0B0F17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M5.5 21a7 7 0 0 1 13 0" />
      </svg>
    ),
    title: "Profils développeurs",
    desc:
      "Avatar, bio, stack technique et liens GitHub / réseaux — ton identité de dev en un coup d'œil.",
  },
  {
    icon: (
      <svg
        width="23"
        height="23"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0B0F17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
      </svg>
    ),
    title: "Feed de snippets",
    desc:
      "Publie ton code avec coloration syntaxique et découvre ce que construit la communauté.",
  },
  {
    icon: (
      <svg
        width="23"
        height="23"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0B0F17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6M22 11h-6" />
      </svg>
    ),
    title: "Follow & fil personnalisé",
    desc:
      "Suis les devs qui t'inspirent et garde un fil d'actualité taillé pour tes centres d'intérêt.",
  },
  {
    icon: (
      <svg
        width="23"
        height="23"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0B0F17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Messagerie temps réel",
    desc:
      "Discute en direct via WebSocket — messages livrés à la seconde, sans rechargement.",
  },
  {
    icon: (
      <svg
        width="23"
        height="23"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0B0F17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
      </svg>
    ),
    title: "Notifications instantanées",
    desc:
      "Likes, follows, commentaires : reçois chaque interaction en direct, dès qu'elle arrive.",
  },
  {
    icon: (
      <svg
        width="23"
        height="23"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0B0F17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Auth & GitHub OAuth",
    desc:
      "Connexion JWT sécurisée (access + refresh) ou en un clic via ton compte GitHub.",
  },
];
  
  const extras = ['Recherche par techno', 'Upload S3', 'Pièces jointes', 'Fil personnalisé']
  
  export default function Features() {
    return (
      <section id="features" className="py-[90px] pb-10">
        <div className="mx-auto max-w-[1200px] px-8">
  
          <div className="max-w-[680px]">
            <span className="font-mono text-[13px] font-semibold uppercase tracking-[.04em] text-[#7A8190]">// Fonctionnalités</span>
            <h2 className="mt-[14px] font-display text-[44px] font-semibold leading-[1.08] tracking-[-0.03em]">
              Tout ce qu'il faut pour coder en communauté.
            </h2>
            <p className="mt-4 text-[18px] leading-relaxed text-[#525968]">
              Du profil au feed en passant par la messagerie temps réel — chaque brique du MVP, pensée pour les développeurs.
            </p>
          </div>
  
          <div className="mt-12 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-[#ECEEE8] bg-white p-[26px] transition hover:-translate-y-[3px] hover:border-[color-mix(in_srgb,#BEF264_60%,#ECEEE8)] hover:shadow-[0_16px_36px_-22px_rgba(15,20,30,.25)]"
              >
                <div className="mb-[18px] flex h-[46px] w-[46px] items-center justify-center rounded-[12px]" style={{ background: 'color-mix(in srgb,#BEF264 22%,transparent)' }}>
                  {icon}
                </div>
                <h3 className="mb-2 font-display text-[20px] font-semibold tracking-[-0.02em]">{title}</h3>
                <p className="text-[15px] leading-[1.55] text-[#5A6170]">{desc}</p>
              </div>
            ))}
          </div>
  
          <div className="mt-6 flex flex-wrap items-center gap-2.5 font-mono text-[12.5px] text-[#6A7180]">
            <span className="text-[#9AA1AD]">et aussi —</span>
            {extras.map(tag => (
              <span key={tag} className="rounded-lg border border-[#ECEEE8] bg-white px-[11px] py-[6px]">{tag}</span>
            ))}
          </div>
  
        </div>
      </section>
    )
  }
  