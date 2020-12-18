const path = require('path');

// const configPath = path.resolve(__dirname, "../packages/builder/postcss.config.js");

module.exports = {
    "stories": ["../packages/**/*.stories.@(js|jsx|ts|tsx)"],
    "addons": [
        "@storybook/addon-actions",
        "@storybook/addon-links",
        "@storybook/addon-essentials"
    ],
    // typescript: {
    //     check: false,
    //     checkOptions: {},
    //     reactDocgen: 'react-docgen-typescript',
    //     reactDocgenTypescriptOptions: {
    //         shouldExtractLiteralValuesFromEnum: true,
    //         propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    //     },
    // },
    webpackFinal: async (config) => {
        // remove default css rule from storybook
        config.module.rules = config.module.rules.filter((f) => f.test.toString() !== '/\\.css$/');

        // push our custom easy one
        config.module.rules.push({
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    // options: {
                    //   // Key config
                    //   // modules: true,
                    // },
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: { // TODO: Purge the unused css from Tailwind.
                            // config: configPath,
                        },
                    },
                },
            ],
        });

        // This is where we change the order of resolution of main fields
        config.resolve.mainFields = ['src', 'module', 'main'];

        // Return the altered config
        return config;
    },
}