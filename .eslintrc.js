module.exports = {
    env: {
        browser: true,
    },
    parser: '@typescript-eslint/parser',
    extends: ['airbnb-typescript'],
    parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: './',
        ecmaVersion: 'es6',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }], // Indent with 4 spaces
        'react/jsx-indent': ['error', 4], // Indent JSX with 4 spaces
        'react/jsx-indent-props': ['error', 4], // Indent props with 4 spaces
        '@typescript-eslint/indent': ['error', 4],
        'spaced-comment': 0,
    },
};
