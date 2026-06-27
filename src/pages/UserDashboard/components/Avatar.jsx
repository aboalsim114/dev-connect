export default function Avatar({ gradient, initial, size = 42, fontSize = 16 }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: gradient,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: initial === "A" || initial === "K" ? "#0B0F17" : "#fff",
        fontWeight: 700,
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize,
        flexShrink: 0,
      }}
    >
      {initial}
    </span>
  );
}
