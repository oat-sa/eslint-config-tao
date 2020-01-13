module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        mocha: true
    },
    globals: {
        Cypress: true,
        cy: true
    },
    parserOptions: {
        sourceType: 'module'
    },
    extends: 'eslint:recommended',
    rules: {
        'consistent-this': ['error', 'self'],
        eqeqeq: ['error'],
        indent: ['warn', 4, { SwitchCase: 1, MemberExpression: 'off' }],
        'linebreak-style': ['error', 'unix'],
        'no-alert': ['warn'],
        'no-caller': ['error'],
        'no-console': ['warn'],
        'no-debugger': ['warn'],
        'no-eval': ['error'],
        'no-extend-native': ['error'],
        'no-extra-bind': ['error'],
        'no-implicit-globals': ['error'],
        'no-implied-eval': ['error'],
        'no-lone-blocks': ['error'],
        'no-new-func': ['error'],
        'no-script-url': ['error'],
        'no-self-compare': ['error'],
        'no-shadow': ['error', { hoist: 'functions' }],
        'no-throw-literal': ['error'],
        'no-trailing-spaces': ['error'],
        'no-undefined': ['error'],
        'no-use-before-define': ['error', { functions: false }],
        semi: ['error', 'always'],
        'vars-on-top': ['error']
    }
};
