const path = require('path');
// const purgecss = require("@fullhuman/postcss-purgecss");

const configPath = path.resolve(__dirname, "../builder/tailwind.config.js");

module.exports = {
  plugins: [
    // require("postcss-preset-env"),
    require("postcss-import"),
    require("tailwindcss")(configPath),
    require("autoprefixer"),

    // purgecss({ // use purgecss broke storybook, whyyyy?
    //     content: ["./**/*.html"],
    //     // defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [] // someone
    //     defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [] // doc
    // }),
  ]
};
