import { AsideCard } from "./ui";
import { LANGUAGES } from "../data";

export default function LanguagesSection() {
  return (
    <AsideCard title="Langues">
      <div className="flex flex-col gap-3">
        {LANGUAGES.map((l) => (
          <div key={l.name} className="flex items-center justify-between">
            <span className="text-[14px] font-semibold text-[#11151D]">{l.name}</span>
            <span className="text-[12.5px] text-[#5A6573]">{l.level}</span>
          </div>
        ))}
      </div>
    </AsideCard>
  );
}
