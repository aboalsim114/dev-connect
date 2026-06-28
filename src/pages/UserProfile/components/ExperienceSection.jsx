import { Card, SectionTitle, IconBtn } from "./ui";
import { IconPlus } from "../icons";
import { EXPERIENCE } from "../data";

function ExperienceItem({ item, last }) {
  return (
    <div className={`flex gap-3.5 py-3.5 ${!last ? "border-b border-[#F0F2EC]" : ""}`}>
      <span
        className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[11px] font-display text-[18px] font-bold text-white"
        style={{ background: item.logoBg }}
      >
        {item.logo}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[15.5px] font-semibold text-[#11151D]">{item.role}</div>
        <div className="text-[14px] text-[#11151D]">{item.company} · {item.type}</div>
        <div className="mt-px text-[13px] text-[#5A6573]">{item.period} · {item.duration}</div>
        <p className="mt-2 text-[14px] leading-[1.55] text-[#4A5260]">{item.desc}</p>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <span
              key={t}
              className="rounded-[7px] border border-[#E5E8E0] bg-[#F1F3ED] px-2.5 py-1 font-mono text-[11.5px] font-semibold text-[#11151D]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <Card>
      <div className="mb-1.5 flex items-center justify-between">
        <SectionTitle>Expérience</SectionTitle>
        <IconBtn><IconPlus className="h-[18px] w-[18px]" /></IconBtn>
      </div>
      <div>
        {EXPERIENCE.map((item, i) => (
          <ExperienceItem key={item.company} item={item} last={i === EXPERIENCE.length - 1} />
        ))}
      </div>
    </Card>
  );
}
