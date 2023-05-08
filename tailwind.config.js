/** @type {import('tailwindcss').Config} */

const themeFile = require("./src/styles/theme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: themeFile.colors,
      fontSize: themeFile.fontSize,
      spacing: themeFile.spacing,
      letterSpacing: themeFile.letterSpacing,
      lineHeight: themeFile.lineHeight,
      fontFamily: themeFile.fontFamily,
      fontWeight: themeFile.fontWeight,
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        ...themeFile.backgroundImage,
      },
    },
  },
  plugins: [],
};
