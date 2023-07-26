module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'prettier'],
    plugins: ['prettier'],
    rules: {
        indent: ['error', 4],
        'no-unused-vars': 'off',
    },
};
