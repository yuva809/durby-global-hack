import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Durby brand system, light-first: warm off-white + near-black +
        // electric blue, carried over from the main product site so the
        // hackathon still reads as unmistakably Durby. `hack-signal` is
        // this event's one extra accent — reserved for solid-fill chips,
        // buttons and small decorative marks, never as foreground text or
        // icon color on a light surface (lime-on-light fails contrast;
        // see the accessibility note in globals.css). `durby-bg*`/
        // `durby-ink*`/`durby-card`/`durby-line` are kept for the two
        // deliberate dark anchors — Final CTA and Footer — only.
        "durby-bg": "#050505",
        "durby-bg-deep": "#04070d",
        "durby-bg-soft": "#0b0b0b",
        "durby-card": "#141414",
        "durby-card-hover": "#1a1a1a",
        "durby-ink": "#f5f5f2",
        "durby-ink-dim": "#a6a6a6",
        "durby-ink-muted": "#707070",
        "durby-line": "#252525",

        // The light system — used almost everywhere. `durby-paper` is the
        // warm off-white base (Hero, Challenge, What You Can Build, FAQ);
        // `durby-paper-raised` is pure white (Overview, Prizes, How to
        // Join, Judging, Resources, and every card); `durby-tint-blue`/
        // `durby-tint-grey` are the subtle section-to-section variation
        // (Global Community/Why Join/Partners, and Timeline/Mentors).
        "durby-paper": "#faf9f6",
        "durby-paper-raised": "#ffffff",
        "durby-paper-ink": "#0a0a0a",
        "durby-paper-ink-dim": "#54534d",
        "durby-paper-ink-muted": "#6b6a64",
        "durby-paper-line": "#e6e4de",
        "durby-tint-blue": "#eef3fc",
        "durby-tint-grey": "#f1f0ec",

        "durby-blue": "#1677ff",
        "durby-blue-bright": "#3b8dff",
        // A deeper blue reserved for solid fills that carry white text
        // (the trust marquee band) — durby-blue itself reads closer to
        // 4.1:1 against white, just short of the 4.5:1 body-text minimum.
        "durby-blue-deep": "#125fd1",
        "durby-success": "#35c98a",
        "durby-warning": "#f5b942",
        "durby-danger": "#ff5c5c",

        "hack-signal": "#c6ff3d",
        "hack-signal-dim": "#8fd400",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        "durby-soft": "0 1px 3px rgba(5,5,5,0.04), 0 2px 8px rgba(5,5,5,0.04)",
        "durby-elevated": "0 4px 24px -8px rgba(5,5,5,0.08), 0 16px 48px -16px rgba(5,5,5,0.12)",
        "durby-glass": "0 4px 24px -8px rgba(0,0,0,0.4), 0 16px 48px -12px rgba(0,0,0,0.5), inset 0 1px 0 0 rgba(255,255,255,0.08)",
        "hack-glow": "0 0 0 1px rgba(198,255,61,0.25), 0 8px 40px -8px rgba(198,255,61,0.25)",
        "blue-glow": "0 0 0 1px rgba(22,119,255,0.18), 0 8px 40px -8px rgba(22,119,255,0.25)",
      },
      keyframes: {
        "durby-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "durby-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "durby-drift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(20px, -16px)" },
        },
        "durby-grain": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-1%, -2%)" },
          "30%": { transform: "translate(2%, 1%)" },
          "50%": { transform: "translate(-2%, 2%)" },
          "70%": { transform: "translate(1%, -1%)" },
          "90%": { transform: "translate(-1%, 1%)" },
        },
        "hack-marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "hack-spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "durby-float": "durby-float 6s ease-in-out infinite",
        "durby-pulse": "durby-pulse 3.5s ease-in-out infinite",
        "durby-drift": "durby-drift 16s ease-in-out infinite",
        "durby-grain": "durby-grain 8s steps(8) infinite",
        "hack-marquee": "hack-marquee 32s linear infinite",
        "hack-spin-slow": "hack-spin-slow 24s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
