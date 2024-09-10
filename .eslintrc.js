module.exports = {
    extends: './node.js',
    root: true,
    settings: {
        jest: {
            version: 29 // jest is not used directly in this project. But our eslint config will complain if it doesn't see this version when running `npm run lint`
        }
    }
};
