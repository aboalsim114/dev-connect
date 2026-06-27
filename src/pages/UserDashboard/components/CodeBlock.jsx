function CodeToken({ t, c }) {
  return <span style={c ? { color: c } : undefined}>{t}</span>;
}

export default function CodeBlock({ file, lang, lines }) {
  return (
    <div className="mt-3 rounded-xl border border-[#1A212C] overflow-hidden" style={{ background: "#0C1018" }}>
      <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-[#18202B]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-1.5 font-mono text-[11.5px] text-[#737E8C]">{file}</span>
        <span className="ml-auto font-mono text-[10.5px] text-[#4B5563] border border-[#232B36] px-1.5 py-0.5 rounded">{lang}</span>
      </div>
      <pre className="m-0 px-4 py-3.5 font-mono text-[12.5px] leading-[1.7] text-[#C9D1D9] overflow-auto">
        {lines.map((segs, i) => (
          <span key={i}>
            {segs.map((s, j) => <CodeToken key={j} {...s} />)}
            {i < lines.length - 1 && "\n"}
          </span>
        ))}
      </pre>
    </div>
  );
}
