module.exports = {
    root: true,
    env: {
        node: true,
        jest: true,
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'prettier'],
    plugins: ['prettier', 'jest'],
    rules: {
        indent: ['error', 4],
        'no-unused-vars': 'off',
        'vue/multi-word-component-names': 'off',
    },
};
