import jest from 'eslint-plugin-jest';

const testFilesGlob = ['**/__tests__/**/*.[jt]s', '**/?(*.)+(spec|test).[jt]s'];

export default [
    {
        name: 'tao:jest',
        files: testFilesGlob,
        ...jest.configs['flat/recommended']
    }
];
