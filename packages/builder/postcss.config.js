// const production = !process.env.ROLLUP_WATCH;
// const purgecss = require("@fullhuman/postcss-purgecss");
// const path = require('path');
// Tai sao khi run npm run build, no khong su dung config nay
// ma lai su dung config o root?
console.log('postcss.config.js at builder');

module.exports = {
  plugins: [
    // require("postcss-preset-env"),
    require("postcss-import"),
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    // Only purge css on production
    // production &&
    //   purgecss({
    //     content: ["./**/*.html", "./**/*.svelte"],
    //     defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    //   })
  ]
};
