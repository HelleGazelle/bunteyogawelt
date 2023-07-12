const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["src/**/*.njk", "src/**/*.md", "src/*.md"],
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
    // default fonts etc.
    preflight: false,
    // otherwise the navbar will collapse
    visibility: false,
  },
};
