import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Durby brand system — black + off-white + electric blue, carried
        // over from the main product site so the hackathon reads as
        // unmistakably Durby. `hack-signal` is the one addition: a single
        // extra accent reserved for this event's own identity (countdown,
        // live badges, track numbers) — never mixed into the same element
        // as durby-blue, and never used as a gradient partner for it.
        "durby-bg": "#050505",
        "durby-bg-deep": "#000000",
        "durby-bg-soft": "#0b0b0b",
        "durby-card": "#141414",
        "durby-card-hover": "#1a1a1a",
        "durby-ink": "#f5f5f2",
        "durby-ink-dim": "#a6a6a6",
        "durby-ink-muted": "#707070",
        "durby-line": "#252525",

        "durby-paper": "#f5f5f2",
        "durby-paper-raised": "#ffffff",
        "durby-paper-ink": "#050505",
        "durby-paper-ink-dim": "#555555",
        "durby-paper-ink-muted": "#8a8a8a",
        "durby-paper-line": "#e5e5e5",

        "durby-blue": "#1677ff",
        "durby-blue-bright": "#3b8dff",
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
