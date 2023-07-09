const tailwind = require("tailwindcss");
const postCss = require("postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const postcssFilter = (cssCode, done) => {
  postCss([
    tailwind(require("./tailwind.config.js")),
    autoprefixer(),
    cssnano({ preset: "default" }),
  ])
    .process(cssCode, {
      from: "./src/_includes/styles/tailwind.css",
    })
    .then(
      (r) => done(null, r.css),
      (e) => done(e, null)
    );
};

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/_includes/styles/tailwind.css");
  	eleventyConfig.addNunjucksAsyncFilter("postcss", postcssFilter);
    eleventyConfig.addPassthroughCopy('images')

    return {
        dir: {
            input: "src",
			      includes: "_includes",
            output: "public"
        }
    }
}