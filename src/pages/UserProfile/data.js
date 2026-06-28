/* Texte de présentation et stack technique affichés dans la section "Infos" */
export const ABOUT_TEXT =
  "Full-stack engineer avec 6 ans d'expérience, spécialisé dans les applications temps réel et l'outillage développeur. J'aime construire des produits qui rendent le code plus lisible et l'expérience dev plus fluide. Contributeur open-source autour de React et des WebSockets.";

export const ABOUT_TAGS = ["React", "TypeScript", "Node.js", "WebSocket", "PostgreSQL"];

/* Statistiques affichées dans le bandeau du hero */
export const PROFILE_STATS = [
  { value: "128", label: "Posts" },
  { value: "1 248", label: "Abonnés" },
  { value: "342", label: "Abonnements" },
  { value: "8.4k", label: "J'aime reçus", accent: true },
];

/* Expériences professionnelles */
export const EXPERIENCE = [
  {
    role: "Senior Full-stack Engineer",
    company: "Freelance",
    type: "Indépendant",
    period: "2023 — Présent",
    duration: "2 ans",
    logoBg: "linear-gradient(135deg,#BEF264,#22D3EE)",
    logo: "F",
    desc: "Conception d'applications temps réel et d'outils internes pour des startups. Maintenance de librairies open-source autour de React et des WebSockets.",
    tags: ["React", "Node.js", "WebSocket"],
  },
  {
    role: "Frontend Engineer",
    company: "Stellar Labs",
    type: "CDI",
    period: "2021 — 2023",
    duration: "2 ans",
    logoBg: "linear-gradient(135deg,#6366F1,#22D3EE)",
    logo: "S",
    desc: "Développement du design system et des interfaces du produit principal. Migration vers TypeScript et amélioration des performances de rendu.",
    tags: ["TypeScript", "React", "Design System"],
  },
  {
    role: "Développeur Web",
    company: "Studio Kova",
    type: "CDI",
    period: "2019 — 2021",
    duration: "2 ans",
    logoBg: "linear-gradient(135deg,#F472B6,#F59E0B)",
    logo: "K",
    desc: "Intégration et développement de sites clients sur mesure, du front au back.",
    tags: ["JavaScript", "Node.js", "PostgreSQL"],
  },
];

/* Compétences avec niveau et nombre de recommandations */
export const SKILLS = [
  { name: "React", endorse: 48, pct: 94 },
  { name: "TypeScript", endorse: 41, pct: 90 },
  { name: "Node.js", endorse: 36, pct: 82 },
  { name: "WebSocket", endorse: 22, pct: 74 },
  { name: "PostgreSQL", endorse: 18, pct: 66 },
];

/* Langues parlées */
export const LANGUAGES = [
  { name: "Français", level: "Natif" },
  { name: "Anglais", level: "Courant" },
  { name: "Espagnol", level: "Notions" },
];
