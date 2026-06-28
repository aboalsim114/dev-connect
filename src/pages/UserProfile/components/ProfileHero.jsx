import { StatChip } from "./ui";
import { IconLocation, IconGitHub, IconLink, IconPencil, IconCheck } from "../icons";
import { PROFILE_STATS } from "../data";

export default function ProfileHero({ editing, onToggleEditing }) {
  return (
    <div className="relative overflow-hidden bg-[#0B0F17] text-white">
      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(190,242,100,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(190,242,100,.16) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          WebkitMaskImage: "radial-gradient(ellipse 70% 120% at 80% -10%, #000, transparent 70%)",
          maskImage: "radial-gradient(ellipse 70% 120% at 80% -10%, #000, transparent 70%)",
        }}
      />
      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(700px 260px at 85% -10%, rgba(190,242,100,.18), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1080px] px-6 pb-7 pt-10">
        <div className="flex flex-wrap items-start gap-6">
          {/* Avatar */}
          <span
            className="flex h-[118px] w-[118px] shrink-0 items-center justify-center rounded-[28px] font-display text-5xl font-bold text-[#0B0F17]"
            style={{
              background: "linear-gradient(135deg,#BEF264,#22D3EE)",
              boxShadow: "0 16px 40px -12px rgba(190,242,100,.4)",
            }}
          >
            A
          </span>

          {/* Info */}
          <div className="min-w-[260px] flex-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="m-0 font-display text-[32px] font-semibold tracking-[-0.03em]">
                Alex Martin
              </h1>
              <span className="rounded-full bg-[#BEF264] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#0B0F17]">
                PRO
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(52,211,153,.3)] bg-[rgba(52,211,153,.12)] px-3 py-1 text-[12.5px] text-[#34D399]">
                <span className="h-[7px] w-[7px] rounded-full bg-[#34D399]" />
                Ouvert aux opportunités
              </span>
            </div>

            <p className="mt-2 max-w-[540px] text-[16px] text-[#C4CAD4]">
              Senior Full-stack Engineer · React, Node.js &amp; temps réel · Je construis des outils pour développeurs.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13.5px] text-[#8A93A3]">
              <span className="inline-flex items-center gap-1.5">
                <IconLocation className="text-[#8A93A3]" />
                Paris, France
              </span>
              <span className="inline-flex items-center gap-1.5">
                <IconGitHub className="text-[#8A93A3]" />
                @alex-martin
              </span>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 font-semibold text-[#BEF264] no-underline hover:underline"
              >
                <IconLink className="text-[#BEF264]" />
                alex.dev
              </a>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex shrink-0 flex-col gap-2.5">
            <button
              onClick={onToggleEditing}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[11px] border px-5 py-[11px] text-[14.5px] font-semibold transition hover:brightness-95"
              style={{
                background: editing ? "#BEF264" : "#10151E",
                color: editing ? "#0B0F17" : "#FFFFFF",
                borderColor: editing ? "#BEF264" : "#2A323F",
              }}
            >
              {editing ? <IconCheck className="h-4 w-4" /> : <IconPencil className="h-4 w-4" />}
              {editing ? "Terminé" : "Modifier le profil"}
            </button>
            <button className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[11px] border border-[#2A323F] bg-transparent px-5 py-[11px] text-[14.5px] font-semibold text-white transition hover:bg-[#141A24]">
              Partager le profil
            </button>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          {PROFILE_STATS.map((s) => (
            <StatChip key={s.label} value={s.value} label={s.label} accent={s.accent} />
          ))}
        </div>
      </div>
    </div>
  );
}
