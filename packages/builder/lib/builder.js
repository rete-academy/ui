#!/usr/bin/env node

const rollup = require('rollup');
const path = require('path');
const resolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel').default;
const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');

const cwd = process.cwd();

/* eslint-disable-next-line */ // TODO: Fix the next require
const {src, name: pkgName} = require(path.join(cwd, 'package.json'));

// get the current working dir (button, card, etc)
const inputPath = path.join(cwd, src);

// Little workaround to get package name without scope
// const fileName = pkgName.replace('@rete-academy/', '');

// see below for details on the options
const inputOptions = {
    input: inputPath,
    external: ['react'],
    plugins: [
        typescript({
            tsconfig: path.join(cwd, 'tsconfig.local.json'),
        }),
        babel({
            presets: ['@babel/preset-env', '@babel/preset-react'],
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
        }),
        resolve(),
        commonjs({
            transformMixedEsModules: true,
            include: 'node_modules/**',
        }),
    ],
};

const outputOptions = [
    {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        exports: 'named',
    },
    {
        file: 'dist/index.esm.js',
        format: 'esm',
        exports: 'named',
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
