import rules from './frontend-rules.mjs';
import globals from 'globals';
import jsdoc from 'eslint-plugin-jsdoc';
import js from '@eslint/js';
import babelConfig from './babel.mjs';
import jestConfig from './jest.mjs';
import vitestConfig from './vitest.mjs';
import es from 'eslint-plugin-es';
import eslintPluginSvelte from 'eslint-plugin-svelte';

/** @type { import("eslint").Linter.Config[] } */
const configs = {};

configs['flat/svelte-base'] = [
    js.configs.recommended,
    jsdoc.configs['flat/recommended'],
    ...eslintPluginSvelte.configs['flat/recommended'],
    {
        name: 'tao:js', // config names are useful for debugging with the eslint inspector (they are not required)
        files: ['**/*.{cjs,mjs,js,svelte}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        plugins: {
            jsdoc,
            es
        },
        rules
    }
];

configs['flat/babel-parser'] = babelConfig;
configs['flat/jest'] = jestConfig;
configs['flat/vitest'] = vitestConfig;

export default configs;
