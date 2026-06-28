/* Primitives UI partagées par les sections du profil */

export function StatChip({ value, label, accent }) {
  return (
    <div className="rounded-[13px] border border-[#1E2632] bg-[#10151E] px-5 py-3">
      <span className={`font-display text-[19px] font-semibold ${accent ? "text-[#BEF264]" : "text-white"}`}>
        {value}
      </span>
      <span className="ml-1 text-[13px] text-[#8A93A3]">{label}</span>
    </div>
  );
}

export function Card({ children, className = "" }) {
  return (
    <section className={`rounded-[18px] border border-[#E5E8E0] bg-white p-6 ${className}`}>
      {children}
    </section>
  );
}

export function SectionTitle({ children }) {
  return (
    <h2 className="font-display text-[19px] font-semibold tracking-[-0.02em] text-[#11151D]">
      {children}
    </h2>
  );
}

export function IconBtn({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-none bg-transparent text-[#48505F] transition-colors hover:bg-[#F1F3ED]"
    >
      {children}
    </button>
  );
}

export function TechChip({ label }) {
  return (
    <span className="rounded-[8px] border border-[#E5E8E0] bg-[#F1F3ED] px-3 py-1.5 font-mono text-[12.5px] font-semibold text-[#11151D]">
      {label}
    </span>
  );
}

export function AsideCard({ title, children }) {
  return (
    <div className="rounded-[18px] border border-[#E5E8E0] bg-white p-5">
      <h3 className="mb-3.5 font-display text-[15.5px] font-semibold text-[#11151D]">{title}</h3>
      {children}
    </div>
  );
}
