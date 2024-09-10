import vitest from '@vitest/eslint-plugin';

const testFilesGlob = ['**/__tests__/**/*.[jt]s', '**/?(*.)+(spec|test).[jt]s'];

export default [
    {
        name: 'tao:vitest',
        files: testFilesGlob,
        plugins: {
            vitest
        },
        languageOptions: {
            globals: {
                ...vitest.environments.env.globals
            }
        },
        rules: {
            ...vitest.configs.recommended.rules
        }
    }
];
