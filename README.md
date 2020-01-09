# eslint-config-tao

Shareable `.eslintrc` configurations package for `oat-sa` projects.

## Concept

All extensions, projects and libraries under (`oat-sa` wide) should use the shared config as a basis.
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

3. Configuration for es modules, svelte, etc.:

    ```javascript
    module.exports = {
        extends: "@oat-sa/eslint-config-tao/svelte"
    }
    ```

## Release history
 
 * _0.1.0_ Initial release.
