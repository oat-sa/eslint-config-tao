export default {
    'arrow-body-style': ['error', 'as-needed'],
    'consistent-this': ['error', 'self'],
    eqeqeq: ['error', 'smart'],
    'no-alert': ['error'],
    'no-caller': ['error'],
    'no-console': ['error'],
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
    'no-use-before-define': ['error', { functions: false }],
    'no-useless-call': ['error'],
    'no-useless-computed-key': ['error'],
    'no-useless-rename': ['error'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'prefer-template': ['error'],
    'vars-on-top': ['error'],

    // es plugin rules
    'es/no-classes': ['error'],
    'es/no-generators': ['error'],

    // overriding the jsdoc recommended rules
    'jsdoc/check-param-names': ['warn', { disableExtraPropertyReporting: true }],
    'jsdoc/require-jsdoc': ['off'],
    'jsdoc/tag-lines': ['off'],
    'jsdoc/check-types': ['off'],
    'jsdoc/require-returns-description': ['off']
};
