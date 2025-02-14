/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0A0C1A",
        midnightBlue: "#121530",
        purple: "#7D56F5",
        purpleLight: "#A78BFA",
        white: "#FFFFFF",
        grayLight: "#A1A1A1",
        gradientStart: "#1E293B",
        gradientEnd: "#111827",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50%))" },
        },
        tickers: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50%))" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 15s linear infinite",
        tickers: "tickers 40s linear infinite",
      },
      fontFamily: {
        beVietnam: ["Be Vietnam", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      boxShadow: {
        card: "0 4px 16px rgba(0, 0, 0, 0.2)", // Shadow effect for cards
        button: "0 2px 8px rgba(125, 86, 245, 0.4)", // Shadow for buttons
      },
      borderRadius: {
        xl: "1rem", // Custom border radius for cards and sections
        "2xl": "1.5rem",
      },
      maxWidth: {
        "8xl": "96rem", // Maximum width for large containers
      },
    },
  },
  plugins: [],
};
