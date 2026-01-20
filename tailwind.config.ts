import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: "#FDFCFA",
          100: "#F5F1E8",
          200: "#EBE4D5",
          300: "#E0D7C2",
          400: "#D4C4B0",
          DEFAULT: "#F5F1E8",
        },
        brown: {
          50: "#F5F1ED",
          100: "#E8DFD6",
          200: "#D4C4B0",
          300: "#BCA78F",
          400: "#A38B73",
          500: "#8B7355",
          600: "#6E5C44",
          700: "#534536",
          800: "#3A3028",
          900: "#2C2419",
          DEFAULT: "#8B7355",
        },
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "system-ui", "sans-serif"],
        ja: ["var(--font-zen-maru-gothic)", "sans-serif"],
        display: ["var(--font-zen-maru-gothic)", "sans-serif"],
      },
      fontSize: {
        base: ["18px", { lineHeight: "1.75" }],
      },
      maxWidth: {
        prose: "65ch",
      },
    },
  },
};

export default config;
