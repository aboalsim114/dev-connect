import { Card, SectionTitle } from "./ui";

export default function EducationSection() {
  return (
    <Card>
      <SectionTitle>Formation</SectionTitle>
      <div className="mt-1.5 flex gap-3.5 py-3.5">
        <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[11px] bg-[#0B0F17] font-display text-[15px] font-bold text-[#BEF264]">
          ESGI
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-[15.5px] font-semibold text-[#11151D]">
            ESGI — École Supérieure de Génie Informatique
          </div>
          <div className="text-[14px] text-[#11151D]">Mastère Ingénierie du Web (M4)</div>
          <div className="mt-px text-[13px] text-[#5A6573]">2024 — 2026</div>
        </div>
      </div>
    </Card>
  );
}
