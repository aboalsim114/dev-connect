import { AsideCard } from "./ui";
import { IconMail, IconLocation, IconLink } from "../icons";

const CONTACT_ITEMS = [
  { icon: <IconMail />, label: "Email", value: "alex.martin@exemple.dev" },
  { icon: <IconLocation className="text-[#48505F]" />, label: "Localisation", value: "Paris, France" },
  { icon: <IconLink className="text-[#48505F]" />, label: "Site web", value: "alex.dev", blue: true },
];

export default function ContactSection() {
  return (
    <AsideCard title="Coordonnées">
      <div className="flex flex-col gap-3">
        {CONTACT_ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] bg-[#F1F3ED]">
              {item.icon}
            </span>
            <div className="min-w-0">
              <div className="text-[12px] text-[#5A6573]">{item.label}</div>
              <div className={`overflow-hidden text-ellipsis whitespace-nowrap text-[13.5px] font-semibold ${item.blue ? "text-[#2563EB]" : "text-[#11151D]"}`}>
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </AsideCard>
  );
}
