import Avatar from "./Avatar";
import { CodeIcon, ImageIcon, TagIcon } from "../icons";

export default function Composer() {
  return (
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
  );
}
