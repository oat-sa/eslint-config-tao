/** @type { import("eslint").Linter.Config } */
module.exports = {
    env: {
        '@vitest/env': true
    },
    extends: ['./svelte-base-legacy.js', 'plugin:@vitest/legacy-recommended'],
    plugins: ['@vitest']
};
