import Avatar from "./Avatar";
import { PlusIcon, ChevronDownIcon } from "../icons";
import { NAV_LINKS } from "../data";

export default function Sidebar() {
  return (
    <aside
      className="sticky top-0 h-screen flex flex-col gap-2 border-r border-[#E5E8E0] bg-[#FBFCFA]"
      style={{ padding: "22px 18px" }}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-3 text-[#0B0F17] no-underline pb-4 px-2">
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
