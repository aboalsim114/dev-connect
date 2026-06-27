import Avatar from "./Avatar";
import CodeBlock from "./CodeBlock";
import { HeartIcon, CommentIcon, ShareIcon, BookmarkIcon } from "../icons";

export default function PostCard({ post, liked, likeCount, onLike }) {
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
