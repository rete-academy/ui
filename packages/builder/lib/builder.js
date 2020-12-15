#!/usr/bin/env node

const rollup = require('rollup');
const path = require('path');
const resolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel').default;
const postcss = require('rollup-plugin-postcss');
const styles = require('rollup-plugin-styles');

const currentWorkingPath = process.cwd();
const { src, name } = require(path.join(currentWorkingPath, 'package.json'));

const inputPath = path.join(currentWorkingPath, src); // get the current working dir (button, card, etc)
const configPath = path.resolve(__dirname, "../postcss.config.js"); // get the builder directory

// Little workaround to get package name without scope
const fileName = name.replace('@rete-academy/', '');

// see below for details on the options
const inputOptions = {
    input: inputPath,
    external: ['react'],
    plugins: [
        // styles(),
        postcss({
            extensions: ['.css'],
            minimize: true,
            extract: path.resolve('dist/styles.css'),
            // modules: true, // Key configuration
            config: {
                path: configPath,
            },
        }),
        babel({
            presets: ['@babel/preset-env', '@babel/preset-react'],
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
        }),
        resolve(),
    ],
};

const outputOptions = [
  {
    file: `dist/${fileName}.cjs.js`,
    format: 'cjs',
  },
  {
    file: `dist/${fileName}.esm.js`,
    format: 'esm',
  },
];

async function build() {
  // create bundle
  const bundle = await rollup.rollup(inputOptions);
  // loop through the options and write individual bundles
  outputOptions.forEach(async (options) => {
    await bundle.write(options);
  });
}

build();
