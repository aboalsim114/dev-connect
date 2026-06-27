import { useState } from "react";
import Avatar from "./Avatar";
import { SUGGESTIONS } from "../data";

const PROFILE_STATS = [
  { value: "128", label: "Posts" },
  { value: "1.2k", label: "Abonnés" },
  { value: "342", label: "Abonn.", accent: true },
];

export default function RightRail() {
  const [followed, setFollowed] = useState({});

  const toggleFollow = (name) =>
    setFollowed((p) => ({ ...p, [name]: !p[name] }));

  return (
    <aside
      className="h-screen overflow-y-auto border-l border-[#E5E8E0] bg-[#FBFCFA] flex flex-col gap-4"
      style={{ padding: "22px 20px", scrollbarWidth: "thin", scrollbarColor: "#E2E5DD transparent" }}
    >
      {/* Profile stat card */}
      <div className="relative rounded-2xl overflow-hidden text-white" style={{ background: "#0B0F17", padding: 18 }}>
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
            {PROFILE_STATS.map(({ value, label, accent }) => (
              <div key={label} className="flex-1 rounded-[11px] p-3" style={{ background: "#161D28" }}>
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
