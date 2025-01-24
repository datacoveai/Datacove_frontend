/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0A0C1A", // Primary background color
        midnightBlue: "#121530", // Secondary background color
        purple: "#7D56F5", // Accent color for buttons and links
        purpleLight: "#A78BFA", // Lighter accent for hover effects
        white: "#FFFFFF", // Text color for dark backgrounds
        grayLight: "#A1A1A1", // Light gray for text or icons
        gradientStart: "#1E293B", // Start of gradient background
        gradientEnd: "#111827", // End of gradient background
      },

      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans], // Primary font for headings and text
        code: ['"Fira Code"', "monospace"],
        beVietnam: ["Be Vietnam", "sans-serif"],
      },
      backgroundImage: {
        "gradient-border":
          "linear-gradient(130.38deg, #ffffff 57.86%, rgba(152, 255, 206, 0.68) 74.98%, #3771c8 89.11%, #7e69ff 100.67%)",
      },
      spacing: {
        18: "4.5rem", // Custom spacing for padding and margins
        22: "5.5rem",
        26: "6.5rem",
        15: "3.75rem",
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
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
