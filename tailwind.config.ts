import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        automotive: {
          950: "#060709",
          900: "#0b0d12",
          850: "#10141d",
          800: "#161b26",
          700: "#222a3a",
          accent: "#2fd5c5",
          accentGlow: "rgba(47, 213, 197, 0.15)",
          electric: "#4895ef",
          gold: "#d4af37",
          silver: "#c0c5ce",
          steel: "#7b8794",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-cinzel)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widestLuxury: "0.28em",
        extremeLuxury: "0.45em",
      },
      backgroundImage: {
        "radial-gradient-hero": "radial-gradient(ellipse at 50% 40%, rgba(30, 48, 70, 0.4) 0%, rgba(6, 7, 9, 0.95) 75%, #060709 100%)",
        "radial-glow": "radial-gradient(circle at center, rgba(47, 213, 197, 0.12) 0%, transparent 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.7" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulseSlow 4s ease-in-out infinite",
        scanline: "scanline 8s linear infinite",
        "fade-in": "fadeIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-up": "fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
