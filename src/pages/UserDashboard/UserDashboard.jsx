import { useState } from "react";

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
  </svg>
);
const SearchIcon = ({ size = 17, color = "#9AA1AD" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
  </svg>
);
const MessageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" />
  </svg>
);
const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" /><path d="M5.5 21a7 7 0 0 1 13 0" />
  </svg>
);
const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9z" />
  </svg>
);
const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);
const ChevronDownIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9AA1AD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const CodeIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
    <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
  </svg>
);
const ImageIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" />
  </svg>
);
const TagIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 3 12V4a1 1 0 0 1 1-1h8a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.6z" />
    <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" />
  </svg>
);
const HeartIcon = ({ filled }) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill={filled ? "#EC4899" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
  </svg>
);
const CommentIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const ShareIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8" /><path d="M16 6l-4-4-4 4M12 2v14" />
  </svg>
);
const BookmarkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);
const TrendUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#BEF264" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m7 17 9-9M10 8h6v6" />
  </svg>
);

/* ─────────────────────────────────────────────
   AVATAR
───────────────────────────────────────────── */
function Avatar({ gradient, initial, size = 42, fontSize = 16 }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: gradient,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: initial === "A" || initial === "K" ? "#0B0F17" : "#fff",
        fontWeight: 700,
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize,
        flexShrink: 0,
      }}
    >
      {initial}
    </span>
  );
}

/* ─────────────────────────────────────────────
   CODE BLOCK
───────────────────────────────────────────── */
const K = {
  kw: "#22D3EE",
  fn: "#BEF264",
  str: "#FBBF24",
  com: "#5B6472",
  lit: "#FF7B72",
  def: "#C9D1D9",
};

function CodeToken({ t, c }) {
  return <span style={c ? { color: c } : undefined}>{t}</span>;
}

function CodeBlock({ file, lang, lines }) {
  return (
    <div className="mt-3 rounded-xl border border-[#1A212C] overflow-hidden" style={{ background: "#0C1018" }}>
      <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-[#18202B]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-1.5 font-mono text-[11.5px] text-[#737E8C]">{file}</span>
        <span className="ml-auto font-mono text-[10.5px] text-[#4B5563] border border-[#232B36] px-1.5 py-0.5 rounded">{lang}</span>
      </div>
      <pre className="m-0 px-4 py-3.5 font-mono text-[12.5px] leading-[1.7] text-[#C9D1D9] overflow-auto">
        {lines.map((segs, i) => (
          <span key={i}>
            {segs.map((s, j) => <CodeToken key={j} {...s} />)}
            {i < lines.length - 1 && "\n"}
          </span>
        ))}
      </pre>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SIDEBAR
───────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Accueil", icon: HomeIcon, active: true },
  { label: "Explorer", icon: SearchIcon },
  { label: "Messages", icon: MessageIcon, badge: 3 },
  { label: "Notifications", icon: BellIcon, dot: true },
  { label: "Mon profil", icon: UserIcon },
  { label: "Paramètres", icon: SettingsIcon },
];

function Sidebar() {
  return (
    <aside
      className="sticky top-0 h-screen flex flex-col gap-2 border-r border-[#E5E8E0] bg-[#FBFCFA]"
      style={{ padding: "22px 18px" }}
    >
      {/* Logo */}
      <a
        href="#"
        className="flex items-center gap-3 text-[#0B0F17] no-underline pb-4 px-2"
      >
        <span
          className="flex items-center justify-center rounded-[9px] bg-[#0B0F17] font-mono font-bold text-[13px]"
          style={{ width: 34, height: 34, color: "#BEF264" }}
        >
          &lt;/&gt;
        </span>
        <span className="font-display text-[19px] font-semibold tracking-[-0.02em]">
          DevConnect
        </span>
      </a>

      {/* Nav */}
      <nav className="flex flex-col gap-1">
        {NAV_LINKS.map(({ label, icon: Icon, active, badge, dot }) => (
          <a
            key={label}
            href="#"
            className={`flex items-center gap-3 px-3.5 py-[11px] rounded-[11px] no-underline text-[15px] transition-colors ${
              active
                ? "font-semibold text-[#0B0F17] bg-[#BEF264]"
                : "font-medium text-[#48505F] hover:bg-[#F1F3ED] hover:text-[#0B0F17]"
            }`}
          >
            <Icon color={active ? "#0B0F17" : undefined} />
            <span className="flex-1">{label}</span>
            {badge && (
              <span className="text-[11px] font-bold bg-[#0B0F17] text-white min-w-[20px] h-5 rounded-full flex items-center justify-center px-1.5">
                {badge}
              </span>
            )}
            {dot && (
              <span
                className="w-2 h-2 rounded-full bg-[#BEF264]"
                style={{ boxShadow: "0 0 0 3px color-mix(in srgb, #BEF264 35%, transparent)" }}
              />
            )}
          </a>
        ))}
      </nav>

      {/* New post button */}
      <button className="mt-3.5 flex items-center justify-center gap-2.5 text-[15px] font-semibold bg-[#0B0F17] text-white border-none rounded-[12px] py-3.5 cursor-pointer hover:bg-[#1A2030] transition-colors">
        <PlusIcon />
        Nouveau post
      </button>

      {/* User card */}
      <a
        href="#"
        className="mt-auto flex items-center gap-3 p-2.5 rounded-[13px] no-underline text-[#0B0F17] border border-[#E5E8E0] bg-white hover:border-[#D6DAD0] transition-colors"
      >
        <Avatar gradient="linear-gradient(135deg,#BEF264,#22D3EE)" initial="A" size={38} fontSize={14} />
        <span className="flex-1 min-w-0 leading-[1.3]">
          <span className="block text-[14px] font-semibold truncate">Alex Martin</span>
          <span className="block text-[12.5px] text-[#9AA1AD] font-mono">@alex_dev</span>
        </span>
        <ChevronDownIcon />
      </a>
    </aside>
  );
}

/* ─────────────────────────────────────────────
   POST CARD
───────────────────────────────────────────── */
function PostCard({ post, liked, likeCount, onLike }) {
  return (
    <article className="bg-white border border-[#E5E8E0] rounded-2xl p-[18px]">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Avatar gradient={post.avatarBg} initial={post.initial} />
        <div className="leading-[1.32] min-w-0">
          <div className="text-[15px] font-semibold flex items-center gap-1.5 flex-wrap">
            {post.name}
            <span className="font-normal text-[#9AA1AD] font-mono text-[13px]">{post.handle}</span>
          </div>
          <div className="text-[12.5px] text-[#9AA1AD]">{post.meta}</div>
        </div>
        <button className="ml-auto text-[13px] font-semibold text-[#0B0F17] bg-transparent border border-[#DDE0D8] rounded-[9px] px-3.5 py-1.5 cursor-pointer hover:bg-[#F1F3ED] transition-colors">
          + Suivre
        </button>
      </div>

      {/* Text */}
      <p className="text-[15px] leading-[1.55] text-[#262B35] mt-3.5 mb-0">{post.text}</p>

      {/* Code block */}
      {post.code && <CodeBlock file={post.code.file} lang={post.code.lang} lines={post.code.lines} />}

      {/* Actions */}
      <div className="flex items-center gap-1.5 mt-3.5 text-[#6A7180]">
        <button
          onClick={onLike}
          className={`inline-flex items-center gap-1.5 text-[13.5px] font-semibold border-none rounded-[9px] px-3 py-2 cursor-pointer transition-colors ${
            liked ? "bg-[#FBE9F0] text-[#EC4899] hover:bg-[#F8D7E8]" : "bg-transparent text-[#6A7180] hover:bg-[#FBE9F0] hover:text-[#EC4899]"
          }`}
        >
          <HeartIcon filled={liked} />
          {likeCount.toLocaleString("fr-FR")}
        </button>

        <button className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold bg-transparent text-[#6A7180] border-none rounded-[9px] px-3 py-2 cursor-pointer hover:bg-[#F1F3ED] hover:text-[#0B0F17] transition-colors">
          <CommentIcon />
          {post.comments}
        </button>

        <button className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold bg-transparent text-[#6A7180] border-none rounded-[9px] px-3 py-2 cursor-pointer hover:bg-[#F1F3ED] hover:text-[#0B0F17] transition-colors">
          <ShareIcon />
          Partager
        </button>

        <button className="ml-auto inline-flex items-center bg-transparent text-[#9AA1AD] border-none rounded-[9px] p-2 cursor-pointer hover:bg-[#F1F3ED] hover:text-[#0B0F17] transition-colors">
          <BookmarkIcon />
        </button>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────
   MAIN FEED
───────────────────────────────────────────── */
const POSTS = [
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

const INITIAL_LIKES = {
  p1: { liked: true, count: 248 },
  p2: { liked: false, count: 91 },
  p3: { liked: false, count: 412 },
};

function MainFeed() {
  const [tab, setTab] = useState("foryou");
  const [likes, setLikes] = useState(INITIAL_LIKES);

  const toggleLike = (id) => {
    setLikes((prev) => {
      const cur = prev[id];
      const liked = !cur.liked;
      return { ...prev, [id]: { liked, count: cur.count + (liked ? 1 : -1) } };
    });
  };

  return (
    <main className="h-screen overflow-y-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "#E2E5DD transparent" }}>
      {/* Topbar */}
      <div
        className="sticky top-0 z-20 border-b border-[#E5E8E0] px-8 py-4 flex items-center gap-4"
        style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", background: "rgba(244,246,241,.86)" }}
      >
        <h1 className="font-display text-[21px] font-semibold tracking-[-0.02em] m-0 leading-none">
          Accueil
        </h1>


        {/* Search */}
        <div className="ml-auto flex items-center bg-white border border-[#E5E8E0] rounded-[11px] px-3 w-[280px] focus-within:border-[#BEF264]" style={{ transition: "border-color .15s" }}>
          <SearchIcon />
          <input
            placeholder="Rechercher devs, technos…"
            className="flex-1 border-none outline-none bg-transparent font-sans text-[14px] py-2.5 px-2 text-[#0B0F17] placeholder:text-[#9AA1AD]"
          />
        </div>
      </div>

      {/* Feed content */}
      <div className="max-w-[620px] mx-auto px-6 py-6 pb-16 flex flex-col gap-4">
        {/* Composer */}
        <div className="bg-white border border-[#E5E8E0] rounded-2xl p-4">
          <div className="flex gap-3">
            <Avatar gradient="linear-gradient(135deg,#BEF264,#22D3EE)" initial="A" />
            <div className="flex-1 min-w-0">
              <div className="text-[16px] text-[#9AA1AD] py-2.5 px-0.5">
                Partage un snippet ou une idée, @alex_dev…
              </div>
              <div className="flex items-center gap-1 mt-2 pt-3 border-t border-[#F0F2EC]">
                <button className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#48505F] bg-transparent border-none rounded-[9px] px-2.5 py-2 cursor-pointer font-mono hover:bg-[#F1F3ED] hover:text-[#0B0F17] transition-colors">
                  <CodeIcon /> Code
                </button>
                <button className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#48505F] bg-transparent border-none rounded-[9px] px-2.5 py-2 cursor-pointer hover:bg-[#F1F3ED] hover:text-[#0B0F17] transition-colors">
                  <ImageIcon /> Image
                </button>
                <button className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#48505F] bg-transparent border-none rounded-[9px] px-2.5 py-2 cursor-pointer hover:bg-[#F1F3ED] hover:text-[#0B0F17] transition-colors">
                  <TagIcon /> Techno
                </button>
                <button className="ml-auto text-[14px] font-semibold bg-[#BEF264] text-[#0B0F17] border-none rounded-[10px] px-5 py-2.5 cursor-pointer hover:brightness-95 transition-all">
                  Publier
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts */}
        {POSTS.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            liked={likes[post.id].liked}
            likeCount={likes[post.id].count}
            onLike={() => toggleLike(post.id)}
          />
        ))}
      </div>
    </main>
  );
}

/* ─────────────────────────────────────────────
   RIGHT RAIL
───────────────────────────────────────────── */
const TRENDS = [
  { tag: "#react", count: "2 412 posts" },
  { tag: "#rust", count: "1 893 posts" },
  { tag: "#typescript", count: "1 640 posts" },
  { tag: "#docker", count: "980 posts" },
];

const SUGGESTIONS = [
  { initial: "S", gradient: "linear-gradient(135deg,#F472B6,#F59E0B)", name: "Sofia Reyes", handle: "@sofia.codes" },
  { initial: "T", gradient: "linear-gradient(135deg,#6366F1,#22D3EE)", name: "Theo Blanc", handle: "@theo_b" },
  { initial: "K", gradient: "linear-gradient(135deg,#34D399,#22D3EE)", name: "Kevin Tran", handle: "@kev_ts" },
];

function RightRail() {
  const [followed, setFollowed] = useState({});

  const toggleFollow = (name) =>
    setFollowed((p) => ({ ...p, [name]: !p[name] }));

  return (
    <aside
      className="h-screen overflow-y-auto border-l border-[#E5E8E0] bg-[#FBFCFA] flex flex-col gap-4"
      style={{ padding: "22px 20px", scrollbarWidth: "thin", scrollbarColor: "#E2E5DD transparent" }}
    >
      {/* Profile stat card */}
      <div
        className="relative rounded-2xl overflow-hidden text-white"
        style={{ background: "#0B0F17", padding: 18 }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(color-mix(in srgb, #BEF264 60%, transparent) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 80% 0%, #000, transparent 70%)",
            maskImage: "radial-gradient(ellipse 70% 70% at 80% 0%, #000, transparent 70%)",
          }}
        />
        <div className="relative">
          <div className="flex items-center gap-3">
            <Avatar gradient="linear-gradient(135deg,#BEF264,#22D3EE)" initial="A" size={46} fontSize={18} />
            <div className="leading-[1.3]">
              <div className="font-semibold text-[16px]">Alex Martin</div>
              <div className="text-[12.5px] text-[#9AA1AD] font-mono">@alex_dev</div>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            {[
              { value: "128", label: "Posts" },
              { value: "1.2k", label: "Abonnés" },
              { value: "342", label: "Abonn.", accent: true },
            ].map(({ value, label, accent }) => (
              <div
                key={label}
                className="flex-1 rounded-[11px] p-3"
                style={{ background: "#161D28" }}
              >
                <div
                  className="font-display font-semibold text-[19px] leading-none"
                  style={accent ? { color: "#BEF264" } : undefined}
                >
                  {value}
                </div>
                <div className="text-[11px] text-[#7A828F] mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    

      {/* Devs à suivre */}
      <div className="bg-white border border-[#E5E8E0] rounded-2xl p-[18px]">
        <h3 className="font-display text-[15.5px] font-semibold m-0 mb-3.5">
          Devs à suivre
        </h3>
        <div className="flex flex-col gap-3.5">
          {SUGGESTIONS.map(({ initial, gradient, name, handle }) => (
            <div key={name} className="flex items-center gap-3">
              <Avatar gradient={gradient} initial={initial} size={38} fontSize={14} />
              <div className="leading-[1.3] min-w-0 flex-1">
                <div className="text-[14px] font-semibold truncate">{name}</div>
                <div className="text-[12px] text-[#9AA1AD] font-mono">{handle}</div>
              </div>
              <button
                onClick={() => toggleFollow(name)}
                className={`text-[12.5px] font-semibold border-none rounded-[8px] px-3 py-1.5 cursor-pointer transition-all ${
                  followed[name]
                    ? "bg-[#F1F3ED] text-[#48505F] hover:bg-[#E5E8E0]"
                    : "bg-[#BEF264] text-[#0B0F17] hover:brightness-95"
                }`}
              >
                {followed[name] ? "Suivi ✓" : "Suivre"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ESGI mention */}
      <p className="text-[11.5px] text-[#B0B8C4] text-center mt-auto leading-relaxed">
        Projet annuel ESGI M4 · DevConnect © 2026
      </p>
    </aside>
  );
}

/* ─────────────────────────────────────────────
   ROOT DASHBOARD
───────────────────────────────────────────── */
export default function Dashboard() {
  return (
    <div
      className="font-sans text-[#0B0F17] min-h-screen"
      style={{
        background: "#F4F6F1",
        display: "grid",
        gridTemplateColumns: "260px minmax(0,1fr) 320px",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <Sidebar />
      <MainFeed />
      <RightRail />
    </div>
  );
}
