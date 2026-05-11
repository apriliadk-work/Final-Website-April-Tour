import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Brand identity from April Tour profile
        navy: {
          50: "#f0f4fa",
          100: "#dae5f1",
          200: "#b6cce4",
          300: "#8aabd0",
          400: "#5a85b8",
          500: "#3d68a0",
          600: "#2d5083",
          700: "#1f3d68",
          800: "#152c4d",
          900: "#0d1d35",
          950: "#06122a",
        },
        gold: {
          50: "#fdf9ef",
          100: "#faf0d4",
          200: "#f4dea3",
          300: "#edc568",
          400: "#e8b03f",
          500: "#d99524",
          600: "#bb751c",
          700: "#94561a",
          800: "#7a451d",
          900: "#67391c",
        },
        cream: {
          50: "#fefcf7",
          100: "#fdf7e9",
          200: "#fbedc9",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "slide-in": "slideIn 0.6s ease-out forwards",
        "ken-burns": "kenBurns 20s ease-in-out infinite alternate",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        kenBurns: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.1) translate(-2%, -2%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero": "linear-gradient(180deg, rgba(13,29,53,0.1) 0%, rgba(13,29,53,0.4) 50%, rgba(13,29,53,0.85) 100%)",
      },
      boxShadow: {
        "soft": "0 4px 24px -8px rgba(13, 29, 53, 0.12)",
        "elegant": "0 16px 48px -16px rgba(13, 29, 53, 0.18)",
        "luxury": "0 24px 64px -24px rgba(13, 29, 53, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
