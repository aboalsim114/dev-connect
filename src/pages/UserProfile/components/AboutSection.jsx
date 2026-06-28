import { Card, SectionTitle, IconBtn, TechChip } from "./ui";
import { IconEdit } from "../icons";
import { ABOUT_TEXT, ABOUT_TAGS } from "../data";

export default function AboutSection() {
  return (
    <Card>
      <div className="mb-3 flex items-center justify-between">
        <SectionTitle>Infos</SectionTitle>
        <IconBtn><IconEdit className="h-[17px] w-[17px]" /></IconBtn>
      </div>
      <p className="text-[15px] leading-relaxed text-[#39414D]">{ABOUT_TEXT}</p>
      <div className="mt-[18px] flex flex-wrap gap-2">
        {ABOUT_TAGS.map((t) => (
          <TechChip key={t} label={t} />
        ))}
      </div>
    </Card>
  );
}
