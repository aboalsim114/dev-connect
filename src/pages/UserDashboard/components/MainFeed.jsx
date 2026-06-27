import { useState } from "react";
import Composer from "./Composer";
import PostCard from "./PostCard";
import { SearchIcon } from "../icons";
import { POSTS, INITIAL_LIKES } from "../data";

export default function MainFeed() {
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
        <Composer />

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
