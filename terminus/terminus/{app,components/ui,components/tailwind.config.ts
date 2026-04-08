import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Instrument Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "#0b0c10",
          2: "#12131a",
          3: "#1a1c26",
          4: "#22253a",
        },
        gold: {
          DEFAULT: "#c9a96e",
          2: "#e8cfa0",
          dim: "rgba(201,169,110,0.15)",
          glow: "rgba(201,169,110,0.08)",
        },
        cream: "#e8e2d5",
        muted: {
          DEFAULT: "#7a7c8e",
          2: "#4e5168",
        },
        line: {
          DEFAULT: "rgba(255,255,255,0.08)",
          2: "rgba(255,255,255,0.14)",
        },
        status: {
          success: "#5c9c7a",
          danger: "#c45c5c",
          warn: "#c9843a",
        },
      },
      backgroundImage: {
        "grid-gold":
          "linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        heartbeat: "heartbeat 1.4s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        spin: "spin 1.2s linear infinite",
        "pop-in": "popIn 0.4s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        heartbeat: {
          "0%,100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.12)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.08)" },
          "56%": { transform: "scale(1)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        popIn: {
          "0%": { transform: "scale(0.6)", opacity: "0" },
          "70%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
