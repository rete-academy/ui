// const production = !process.env.ROLLUP_WATCH;
// const purgecss = require("@fullhuman/postcss-purgecss");
const path = require('path');

const currentWorkingPath = process.cwd();
const tmp = currentWorkingPath.split(path.sep).splice(-2);
console.log('### tmp: ', tmp.join(path.sep));

module.exports = {
  plugins: [
    // require("postcss-preset-env"),
    require("postcss-import"),
    require("tailwindcss")("./package.json"),
    require("autoprefixer"),
    // Only purge css on production
    // production &&
    //   purgecss({
    //     content: ["./**/*.html", "./**/*.svelte"],
    //     defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    //   })
  ]
};
