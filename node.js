module.exports = {
    env: {
        node: true,
        es2024: true,
        'jest/globals': true
    },
    plugins: ['es', 'jsdoc', 'jest'],
    parserOptions: {
        sourceType: 'module'
    },
    overrides: [],
    settings: {
        jsdoc: {
            mode: 'jsdoc'
        }
    },
    extends: ['eslint:recommended', 'plugin:jest/recommended'],
    rules: {
        'array-bracket-newline': ['warn', 'consistent'],
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-spacing': ['warn', { before: true, after: true }],
        'brace-style': ['warn', '1tbs'],
        'consistent-this': ['error', 'self'],
        eqeqeq: ['error', 'smart'],
        'es/no-classes': ['error'],
        'es/no-generators': ['error'],
        'func-call-spacing': ['error'],
        indent: ['warn', 4, { SwitchCase: 1, MemberExpression: 'off' }],
        // the below jest rule customization is because Supertest tests don't use the expect assertion (they use an expect function). See rule details here https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/expect-expect.md
        // Example of supertest code: https://github.com/oat-sa/tao-control-center/blob/develop/backend/test/app.spec.js#L28
        'jest/expect-expect': ['error', { assertFunctionNames: ['expect', 'request.**.expect'] }],
        'jsdoc/check-alignment': ['warn'],
        'jsdoc/check-param-names': ['warn', { disableExtraPropertyReporting: true }],
        'jsdoc/require-param': ['warn'],
        'jsdoc/require-param-name': ['warn'],
        'jsdoc/require-param-type': ['warn'],
        'jsdoc/require-returns': ['warn'],
        'jsdoc/require-returns-check': ['warn'],
        'jsdoc/require-returns-type': ['warn'],
        'linebreak-style': ['error', 'unix'],
        'new-parens': ['error'],
        'no-alert': ['error'],
        'no-caller': ['error'],
        'no-confusing-arrow': ['error', { allowParens: false }],
        'no-console': ['error'],
        'no-debugger': ['error'],
        'no-duplicate-imports': ['error'],
        'no-eval': ['error'],
        'no-extend-native': ['error'],
        'no-extra-bind': ['error'],
        'no-implicit-globals': ['error'],
        'no-implied-eval': ['error'],
        'no-lone-blocks': ['error'],
        'no-multi-assign': ['error'],
        'no-new-func': ['error'],
        'no-script-url': ['error'],
        'no-self-compare': ['error'],
        'no-sequences': ['error'],
        'no-shadow': ['error', { hoist: 'functions' }],
        'no-template-curly-in-string': ['error'],
        'no-throw-literal': ['error'],
        'no-trailing-spaces': ['error'],
        'no-undefined': ['error'],
        'no-use-before-define': ['error', { functions: false }],
        'no-useless-call': ['error'],
        'no-useless-computed-key': ['error'],
        'no-useless-rename': ['error'],
        'prefer-rest-params': ['error'],
        'prefer-spread': ['error'],
        'prefer-template': ['error'],
        semi: ['error', 'always'],
        'vars-on-top': ['error']
    }
};
