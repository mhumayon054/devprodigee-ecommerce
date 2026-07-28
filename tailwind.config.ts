import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#166CD2",
          dark: "#2B3543",
        },
      },
      fontFamily: {
        sans: ["var(--font-nunito-sans)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
