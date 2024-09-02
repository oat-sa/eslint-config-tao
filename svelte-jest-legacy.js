/** @type { import("eslint").Linter.Config } */
module.exports = {
    env: {
        'jest/globals': true
    },
    extends: ['./svelte-base-legacy', 'plugin:jest/recommended'],
    plugins: ['jest']
};
