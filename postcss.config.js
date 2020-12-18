// const path = require('path');
const postCssImport = require('postcss-import');
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
// const purgecss = require("@fullhuman/postcss-purgecss");

// const configPath = path.resolve(__dirname, "../builder/tailwind.config.js");

module.exports = {
    plugins: [
    // require("postcss-preset-env"),
        postCssImport(),
        tailwind('./tailwind.config.js'),
        autoprefixer(),
    // purgecss({ // use purgecss broke storybook, whyyyy?
    //     content: ["./**/*.html"],
    //     // defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [] // someone
    //     defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [] // doc
    // }),
    ],
};
