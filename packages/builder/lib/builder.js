#!/usr/bin/env node

const rollup = require('rollup');
const path = require('path');
const resolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel').default;
const postcss = require('rollup-plugin-postcss');

const currentWorkingPath = process.cwd();
const { src, name } = require(path.join(currentWorkingPath, 'package.json'));

const inputPath = path.join(currentWorkingPath, src);

// Little workaround to get package name without scope
const fileName = name.replace('@rete-academy/', '');

// see below for details on the options
const inputOptions = {
    input: inputPath,
    external: ['react'],
    // preserveSymlinks: true,
    plugins: [
        resolve(),
        postcss({
            extract: true,
            config: {
                path: "../postcss.config.js",
            },
            // modules: true, // Key configuration
        }),
        babel({
            presets: ['@babel/preset-env', '@babel/preset-react'],
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
        }),
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
