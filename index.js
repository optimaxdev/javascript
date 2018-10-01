module.exports = {
    extends: [
        './rules/best-practices',
        './rules/errors',
        './rules/node',
        './rules/style',
        './rules/variables',
        './rules/es6',
        './rules/imports',
        './rules/react',
        './rules/react-a11y',
        './rules/eslint-plugin-flowtype',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
    },
    rules: {
        strict: 'error',
    },
};
