import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      animation: {
        blob: "blob 8s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px,0px) scale(1)",
          },
          "22%": {
            transform: "translate(-75px,-75px) scale(1.1)",
          },
          "33%": {
            transform: "translate(30px,-50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(15px,-25px) scale(0.9)",
          },
          "86%": {
            transform: "translate(-25px,25px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px,0px) scale(1)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      fontFamily: {
        lexend: ["var(--font-lexend)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        dark: {
          background: "#121212",
          foreground: "#202020",
          text: "#ccc",
        },
        light: {
          background: "#f2f2f2",
          foreground: "#e9e9e9",
          text: "#222",
        },
      },
    },
  },
  plugins: [],
};
export default config;
