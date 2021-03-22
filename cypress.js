module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        'cypress/globals': true,
    },
    plugins: ['es', 'cypress'],
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2015,
    },
    overrides: [],
    settings: {},
    extends: ['eslint:recommended', 'plugin:cypress/recommended'],
    rules: {
        'array-bracket-newline': ['warn', 'consistent'],
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-spacing': ['warn', {before: true, after: true}],
        'brace-style': ['warn', '1tbs'],
        'consistent-this': ['error', 'self'],
        eqeqeq: ['error', 'smart'],
        'es/no-classes': ['error'],
        'es/no-generators': ['error'],
        'func-call-spacing': ['error'],
        indent: ['warn', 4, {SwitchCase: 1, MemberExpression: 'off'}],
        'linebreak-style': ['error', 'unix'],
        'new-parens': ['error'],
        'no-alert': ['error'],
        'no-caller': ['error'],
        'no-confusing-arrow': ['error', {allowParens: false}],
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
        'no-shadow': ['error', {hoist: 'functions'}],
        'no-template-curly-in-string': ['error'],
        'no-throw-literal': ['error'],
        'no-trailing-spaces': ['error'],
        'no-undefined': ['error'],
        'no-use-before-define': ['error', {functions: false}],
        'no-useless-call': ['error'],
        'no-useless-computed-key': ['error'],
        'no-useless-rename': ['error'],
        'prefer-rest-params': ['error'],
        'prefer-spread': ['error'],
        'prefer-template': ['error'],
        semi: ['error', 'always'],
        'vars-on-top': ['error'],
    },
};
