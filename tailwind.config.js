module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // screens: { md: { max: "1050px" }, sm: { max: "550px" } },
      screens: {
        "3xl": { min: "1720px" },
      },
      colors: {
        white: { A700: "#ffffff" },
        gray: { 100: "#f0f4ff", 500: "#8f8f8f" },
        black: { 900: "#030024", "900_01": "#000000" },
        yellow: { 900: "#fb7e10" },
        indigo: { 50: "#e7ebf8", 300: "#7e7ece" },
        red: { "500_01": "#ff3b2e" },
        blue_gray: { 100: "#d8d8d8" },
        green: { 200: "#94e8b4" },
        light_green: { 100: "#d3fad6" },
      },
      boxShadow: {
        xs: "1px 1px 50px 0px #0000000c",
        sm: "1px 1px 10px 0px #0000000c",
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
