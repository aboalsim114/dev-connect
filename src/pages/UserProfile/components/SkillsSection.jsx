import { Card, SectionTitle, IconBtn } from "./ui";
import { IconPlus } from "../icons";
import { SKILLS } from "../data";

export default function SkillsSection() {
  return (
    <Card>
      <div className="mb-3.5 flex items-center justify-between">
        <SectionTitle>Compétences</SectionTitle>
        <IconBtn><IconPlus className="h-[18px] w-[18px]" /></IconBtn>
      </div>
      <div className="flex flex-col gap-3">
        {SKILLS.map((sk) => (
          <div key={sk.name}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="font-mono text-[14px] font-semibold text-[#11151D]">{sk.name}</span>
              <span className="text-[12.5px] text-[#5A6573]">{sk.endorse} recommandations</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#EEF0EA]">
              <div
                className="h-full rounded-full bg-[#BEF264] transition-all"
                style={{ width: `${sk.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
