import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/_fsd/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_fsd/entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_fsd/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_fsd/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_fsd/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  themes: {
    light: {
      colors: {
        primary: "#7828c8",
      },
    },
    dark: {
      colors: {
        primary: "#9353d3",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
} satisfies Config;
