/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Inter", "sans"],
      },
      colors: {
        prmColor: "#b51749",
        bgColor: "#ffffff",
        bgColor2: "#F2F2F2",
        hovColor: "#e84a7c",
        txtColor: "#323232",
        preColor: "#e32662",
        color1: "#F4E3E9",
        color2: "#FAF3F5",
        color3: "#575757",
        color4: "#F9EFF3",
        color5: "#7D7D7D",
        color6: "#D9D9D9",
        color7: "#ECB22E",
        color8: "#131418",
      },
    },
    screens: {
      lit: { max: "300px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
