const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["src/**/*.njk"],
  safelist: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        change: "transparent",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
