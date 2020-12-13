// We need this config for storybook. I have no fucking idea why...

// const production = !process.env.ROLLUP_WATCH;
// const purgecss = require("@fullhuman/postcss-purgecss");

console.log('postcss.config.js at root');

const path = require('path');
const cwd = (process.cwd()).split(path.sep);
// Cai nay fail doi voi storybook tai vi no lay path sai, phai lam sao day
const currentPath = cwd.splice(0, cwd.length - 2).join(path.sep);
// currentPath.split(path.sep).splice(-4);
console.log('### currentWorkingPath: ', `${currentPath}/tailwind.config.js`);

module.exports = {
  plugins: [
    // require("postcss-preset-env"),
    require("postcss-import"),
    require("tailwindcss")(`${currentPath}/tailwind.config.js`),
    require("autoprefixer"),
    // Only purge css on production
    // production &&
    //   purgecss({
    //     content: ["./**/*.html", "./**/*.svelte"],
    //     defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    //   })
  ]
};
