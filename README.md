# eslint-config-tao

Shareable `.eslintrc` configurations package for `oat-sa` projects.

## Concept

All extensions, projects and libraries (`oat-sa` wide) should use the shared config as a basis.
Current extension contains a pack of shareable configs depending on the stack and target.
General idea is described here: [https://eslint.org/docs/developer-guide/shareable-configs]()

### Examples

Use shareable eslint configurations via the `extends` config property.

1. Default configuration. Edit the `.eslintrc.js` of your project:

    ```javascript
    module.exports = {
        extends: "@oat-sa/eslint-config-tao"
    }
    ```

2. Configuration for AMD modules:

    ```javascript
    module.exports = {
        extends: "@oat-sa/eslint-config-tao/amd"
    }
    ```

    Recommended plugins to be installed:
    - `eslint-plugin-es`
    - `eslint-plugin-jsdoc`

3. Configuration for es modules, svelte, etc.:

    ```javascript
    module.exports = {
        extends: "@oat-sa/eslint-config-tao/svelte"
    }
    ```

    Recommended plugins to be installed:
    - `eslint-plugin-es`
    - `eslint-plugin-jsdoc`
    - `eslint-plugin-jest`
    - `eslint-plugin-svelte3`

If you forget about recommended eslint plugins, you'll get a warning with the proper versions to install.

## Release history

- _0.1.0_ Initial release.
