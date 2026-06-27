import {
  HomeIcon,
  SearchIcon,
  MessageIcon,
  BellIcon,
  UserIcon,
  SettingsIcon,
} from "./icons";

/* Palette de coloration syntaxique des blocs de code */
export const CODE_THEME = {
  kw: "#22D3EE",
  fn: "#BEF264",
  str: "#FBBF24",
  com: "#5B6472",
  lit: "#FF7B72",
  def: "#C9D1D9",
};

const K = CODE_THEME;

/* Liens de navigation de la sidebar */
export const NAV_LINKS = [
  { label: "Accueil", icon: HomeIcon, active: true },
  { label: "Explorer", icon: SearchIcon },
  { label: "Messages", icon: MessageIcon, badge: 3 },
  { label: "Notifications", icon: BellIcon, dot: true },
  { label: "Mon profil", icon: UserIcon },
  { label: "Paramètres", icon: SettingsIcon },
];

/* Posts du feed principal */
export const POSTS = [
  {
    id: "p1",
    initial: "M",
    name: "Maya Diallo",
    handle: "@maya_dev",
    meta: "il y a 12 min · React · Hooks",
    avatarBg: "linear-gradient(135deg,#22D3EE,#6366F1)",
    text: "Petit hook réutilisable pour un follow optimiste 👇 simple et efficace.",
    comments: 31,
    code: {
      file: "useFollow.js",
      lang: "JS",
      lines: [
        [{ t: "const", c: K.kw }, { t: " toggle = ", c: K.def }, { t: "async", c: K.kw }, { t: " () => {", c: K.def }],
        [{ t: "  await", c: K.kw }, { t: " api.", c: K.def }, { t: "post", c: K.fn }, { t: "(", c: K.def }, { t: "`/follow/${id}`", c: K.str }, { t: ")", c: K.def }],
        [{ t: "  setFollowing", c: K.fn }, { t: "(f => !f)", c: K.def }],
        [{ t: "}", c: K.def }],
      ],
    },
  },
  {
    id: "p2",
    initial: "L",
    name: "Liam Okafor",
    handle: "@liam_ok",
    meta: "il y a 48 min · Rust",
    avatarBg: "linear-gradient(135deg,#BEF264,#22D3EE)",
    text: "Le pattern match de Rust reste un des trucs les plus satisfaisants du langage. Regardez-moi cette clarté.",
    comments: 12,
    code: {
      file: "main.rs",
      lang: "RS",
      lines: [
        [{ t: "match", c: K.kw }, { t: " status {", c: K.def }],
        [{ t: "  Status::", c: K.def }, { t: "Active", c: K.fn }, { t: " => ", c: K.def }, { t: "notify", c: K.fn }, { t: "(),", c: K.def }],
        [{ t: "  Status::", c: K.def }, { t: "Idle", c: K.fn }, { t: "    => wait(),", c: K.def }],
        [{ t: "  _", c: K.lit }, { t: '              => ', c: K.def }, { t: "log", c: K.fn }, { t: "(", c: K.def }, { t: '"unknown"', c: K.str }, { t: "),", c: K.def }],
        [{ t: "}", c: K.def }],
      ],
    },
  },
  {
    id: "p3",
    initial: "S",
    name: "Sofia Reyes",
    handle: "@sofia.codes",
    meta: "il y a 2 h",
    avatarBg: "linear-gradient(135deg,#F472B6,#F59E0B)",
    text: "Rappel du jour : un bon nom de variable vaut mieux qu'un commentaire. Nommez vos intentions, pas vos types. 🧠",
    comments: 54,
  },
];

/* État initial des likes par post */
export const INITIAL_LIKES = {
  p1: { liked: true, count: 248 },
  p2: { liked: false, count: 91 },
  p3: { liked: false, count: 412 },
};

/* Tendances affichées dans le rail de droite */
export const TRENDS = [
  { tag: "#react", count: "2 412 posts" },
  { tag: "#rust", count: "1 893 posts" },
  { tag: "#typescript", count: "1 640 posts" },
  { tag: "#docker", count: "980 posts" },
];

/* Suggestions de devs à suivre */
export const SUGGESTIONS = [
  { initial: "S", gradient: "linear-gradient(135deg,#F472B6,#F59E0B)", name: "Sofia Reyes", handle: "@sofia.codes" },
  { initial: "T", gradient: "linear-gradient(135deg,#6366F1,#22D3EE)", name: "Theo Blanc", handle: "@theo_b" },
  { initial: "K", gradient: "linear-gradient(135deg,#34D399,#22D3EE)", name: "Kevin Tran", handle: "@kev_ts" },
];
