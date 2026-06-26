export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          display: ['"Space Grotesk"', "sans-serif"],
          sans:    ['"Hanken Grotesk"', "system-ui", "sans-serif"],
          mono:    ['"JetBrains Mono"', "monospace"],
        },
        colors: {
          accent: "#BEF264",
          ink:    "#0B0F17",
        },
        keyframes: {
          floaty:  { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
          floaty2: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(9px)"   } },
          floaty3: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-7px)"  } },
        },
      },
    },
  };