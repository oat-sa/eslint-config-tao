import babelParser from '@babel/eslint-parser';

export default [
    {
        name: 'tao:babel-parser',
        files: ['**/*.{cjs,mjs,js}'],
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false
            }
        }
    }
];
