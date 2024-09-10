# eslint-config-tao

Shareable eslint configurations package for `oat-sa` projects.

## Concept

All extensions, projects and libraries (`oat-sa` wide) should use the shared config as a basis.
Current extension contains a pack of shareable configs depending on the stack and target.
See [this](https://eslint.org/docs/latest/extend/shareable-configs) to understand what a shareable config is.

This package includes legacy configs (eslint version < 9) and the new flat configs (eslint version >=9).

## 1. Examples of usage for the new flat configs (eslint v9 required)

#### Note about Prettier

> If you are using Prettier in your project (you should), install [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) and use it as you will see in the examples: it should always be the **last** config in the array. This will turn off rules that conflict with [our Prettier config](https://github.com/oat-sa/prettier-config)

In your `eslint.config.js` file you can **compose** flat configs easily. To use the svelte flat config do this:

1. For a new project using vite and vitest

```javascript
import configs from '@oat-sa/eslint-config-tao/flat/svelte';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [...configs['flat/svelte-base'], ...configs['flat/vitest'], eslintConfigPrettier];
```

2. For a project using babel and jest

```javascript
import configs from '@oat-sa/eslint-config-tao/flat/svelte';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [...configs['flat/svelte-base'], ...configs['flat/babel-parser'] ...configs['flat/jest'], eslintConfigPrettier];
```

**Note**: the Svelte flat config is currently the only flat config in this package

## 2. Examples of usage for legacy configs

Use shareable eslint configurations via the `extends` config property.

1. Default configuration. Edit the `.eslintrc.js` of your project:

    ```javascript
    module.exports = {
        extends: '@oat-sa/eslint-config-tao'
    };
    ```

2. Configuration for AMD modules:

    ```javascript
    module.exports = {
        extends: '@oat-sa/eslint-config-tao/amd'
    };
    ```

3. Configuration for svelte with jest rules:

    ```javascript
    module.exports = {
        extends: '@oat-sa/eslint-config-tao/svelte-jest-legacy'
    };
    ```

4. Configuration for svelte with vitest rules:

    ```javascript
    module.exports = {
        extends: '@oat-sa/eslint-config-tao/svelte-vitest-legacy'
    };
    ```

5. Configuration for node:

    ```javascript
    module.exports = {
        extends: '@oat-sa/eslint-config-tao/node'
    };
    ```

6. Configuration for cypress:
    ```javascript
    module.exports = {
        extends: '@oat-sa/eslint-config-tao/cypress'
    };
    ```

## Flat config notes:

If you install eslint v9 and you still want to use the legacy config, in your package.json you can use this flag:

```json
 "lint": "ESLINT_USE_FLAT_CONFIG=false eslint .
```

If you want to stay on eslint v8.57 (below v8.57 flat config doesn't work) but use the flat config, in your package.json you can do :

```json
 "lint": "ESLINT_USE_FLAT_CONFIG=true eslint .
```

## Common issues migrating to version 4.0.0:

### 1- If you see this error: ERR_PACKAGE_PATH_NOT_EXPORTED

```bash
Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './svelte' is not defined by "exports" in /[some_path]/node_modules/@oat-sa/eslint-config-tao/package.json
Referenced from: /[some_path]/.eslintrc.cjs
```

It means you are coming from a version lower than 4.0.0 and you need to switch the config name you are using in your `.eslintrc.cjs` file from

```
extends: ['@oat-sa/eslint-config-tao/svelte'],
```

to

```
extends: ['@oat-sa/eslint-config-tao/svelte-jest-legacy'],
```

or

```
extends: ['@oat-sa/eslint-config-tao/svelte-vitest-legacy'],
```

### 2- If you use the cypress config:

Make sure that you use this order extending configs (the svelte config should be after the cypress config):

```
extends: ['@oat-sa/eslint-config-tao/cypress', '@oat-sa/eslint-config-tao/svelte-jest-legacy']
```

Otherwise, you'll get this error in every `.svelte` file:

```
1:0  error  Parsing error: This experimental syntax requires enabling one of the following parser plugin(s): "jsx", "flow", "typescript". (1:0)
```

### 3- If you get dependency conflicts when instaling the package

If you are using eslint 8, you will need to update it to version 8.57.0 in order to avoid those dependency issues when running `npm install`. Also, configs in this package use `es2024` and this is available in eslint 8.57.0.

## Change log

See changelog [here](./CHANGELOG.md)
