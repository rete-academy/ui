const path = require('path');
// const production = !process.env.ROLLUP_WATCH;
// const purgecss = require("@fullhuman/postcss-purgecss");
// const path = require('path');

const configPath = path.resolve(__dirname, "../builder/tailwind.config.js");
console.log('### TaiwindCSS configPath: ', configPath);

module.exports = {
  plugins: [
    // require("postcss-preset-env"),
    require("postcss-import"),
    require("tailwindcss")(configPath),
    require("autoprefixer"),
    // Only purge css on production
    // production &&
    //   purgecss({
    //     content: ["./**/*.html", "./**/*.svelte"],
    //     defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    //   })
  ]
};
