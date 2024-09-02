# CHANGELOG

## _4.0.0_

#### General changes

-   In `package.json` use `exports` field to determine [entry points](https://nodejs.org/api/packages.html#package-entry-points) instead of the `main` field. New entry points will be used by consumer apps to import the new flat configs.
-   Updated dependencies to the last version

#### Frontend config changes

-   **BREAKING**: `@oat-sa/eslint-config-tao/svelte` config has been renamed to `@oat-sa/eslint-config-tao/svelte-base-legacy`. The jest rules were extracted to the `@oat-sa/eslint-config-tao/svelte-jest-legacy` config. This will allow to use the `svelte-base-legacy` config with Vitest rules in the new `svelte-vitest-legacy` config. See the README for more info.
-   Added frontend flat configs under `@oat-sa/eslint-config-tao/flat/svelte`. As a side effect of this change, cosumer apps that use `flat/svelte-base` with the `vitest` config won't need to install any jest or babel packages. Consumers with eslint 9 can now use this package.
-   Removed `no-undefined` rule from the frontend rules. These 2 rules already present in the `@eslint/js` recommended rules will replace it: `no-global-assign` and `no-shadow-restricted-names`.
-   Switching `eslint-plugin-jsdoc` `settings.jsdoc.mode` to the default `typescript` value so it helps detect jsdoc type issues

#### Node config changes

-   Customized `jest/expect-expect` recommended rule so it doesn't require an expect assertion if Supertest is already using the `expect` function. Example of supertest code: https://github.com/oat-sa/tao-control-center/blob/develop/backend/test/app.spec.js#L28

#### Cypress config changes

-   Updated `eslint-plugin-cypress` to v3.5.0. This version is compatible with flat configs
-   Added `'cypress/globals'` to the globals
-   Added `ecmaVersion: 'latest'` so consumer apps don't need to add it themselves

## _3.0.1_

-   Added `plugin:jest/recommended` to the node and svelte configs so the jest plugin is well configured.

## _3.0.0_

-   Updated `eslint-plugin-jsdoc` 8 major versions. Note that in [version 44.0](https://github.com/gajus/eslint-plugin-jsdoc/releases/tag/v44.0.0) `settings.jsdoc.mode` default value became `typescript`. So opted into the old default (`jsdoc`) to prevent changes in behavior. See note here.
-   `@babel/eslint-parser` was updated to a compatible version
-   `eslint-plugin-jest` was updated to a compatible version.
-   `eslint-plugin-cypress` was updated to a compatible version. Did not update to v3.0.0 since it was [released 3 days ago](https://github.com/cypress-io/eslint-plugin-cypress/releases/tag/v3.0.0) and it might have rough edges. Should be updated in next versions.
-   Replaced `eslint-plugin-svelte3` with `eslint-plugin-svelte`. This includes the `svelte-eslint-parser` package too. This new version is compatible with svelte 3, 4 and 5
-   Removed `parserOptions.ecmaVersion` since it gets already set by env.es2024. See docs [here](https://eslint.org/docs/v8.x/use/configure/language-options).

## _2.0.0_

-   Updated `eslint-plugin-jsdoc` and `eslint` to address vulnerabilities; updated `eslint-plugin-jest` to address compatibility issue

## _1.1.0_

-   Added the `cypress` config

## _1.0.0_

-   Added the support of the `node` config, include all plugins as dependencies, turn off `implicit-arrow-linebreak`

## _0.1.0_ Initial release.
