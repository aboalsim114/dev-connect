import { useState } from "react";
import ProfileHero from "./components/ProfileHero";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import LanguagesSection from "./components/LanguagesSection";
import LinksSection from "./components/LinksSection";

export default function UserProfile() {
  const [editing, setEditing] = useState(false);

  return (
    <>
    <div className="min-h-screen bg-[#EFF1EC] font-sans text-[#11151D] antialiased [color-scheme:light]">
      <style>{`::selection{background:#BEF264;color:#0B0F17}`}</style>

      <ProfileHero editing={editing} onToggleEditing={() => setEditing((e) => !e)} />

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-5 px-6 pb-16 pt-5 md:grid-cols-[1fr_320px]">
        {/* Main column */}
        <main className="flex min-w-0 flex-col gap-4.5">
          <div className="flex flex-col gap-[18px]">
            <AboutSection />
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
          </div>
        </main>

        {/* Right rail */}
        <aside className="flex flex-col gap-4 md:sticky md:top-[72px] md:self-start">
          <ContactSection />
          <LanguagesSection />
          <LinksSection />
          <p className="text-center font-mono text-[11px] leading-relaxed text-[#A8AEB8]">
            ESGI — Projet Annuel M4<br />
            Ingénierie du Web · 2025–2026
          </p>
        </aside>
      </div>
    </div>
    </>
  );
}
