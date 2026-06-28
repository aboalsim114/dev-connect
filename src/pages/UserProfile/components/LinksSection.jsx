import { AsideCard } from "./ui";
import { IconGitHub, IconLink } from "../icons";

export default function LinksSection() {
  return (
    <AsideCard title="Liens">
      <div className="flex flex-col gap-1">
        <a
          href="#"
          className="flex items-center gap-2.5 py-2.5 text-[#11151D] no-underline transition-opacity hover:opacity-70"
        >
          <IconGitHub className="shrink-0 text-[#0B0F17]" />
          <span className="flex-1 text-[14px] font-semibold">GitHub</span>
          <span className="font-mono text-[13px] text-[#5A6573]">@alex-martin</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-2.5 border-t border-[#F0F2EC] py-2.5 text-[#11151D] no-underline transition-opacity hover:opacity-70"
        >
          <IconLink className="shrink-0 text-[#48505F]" />
          <span className="flex-1 text-[14px] font-semibold">Portfolio</span>
          <span className="font-mono text-[13px] text-[#5A6573]">alex.dev</span>
        </a>
      </div>
    </AsideCard>
  );
}
