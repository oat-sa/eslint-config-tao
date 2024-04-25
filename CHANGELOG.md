# CHANGELOG

- _3.0.0_

  - Updated `eslint-plugin-jsdoc` 8 major versions. Note that in [version 44.0](https://github.com/gajus/eslint-plugin-jsdoc/releases/tag/v44.0.0) `settings.jsdoc.mode` default value became `typescript`. So opted into the old default (`jsdoc`) to prevent changes in behavior. See note here.
  - `@babel/eslint-parser` was updated to a compatible version
  - `eslint-plugin-jest` was updated to a compatible version.
  - `eslint-plugin-cypress` was updated to a compatible version. Did not update to v3.0.0 since it was [released 3 days ago](https://github.com/cypress-io/eslint-plugin-cypress/releases/tag/v3.0.0) and it might have rough edges. Should be updated in next versions.
  - Replaced `eslint-plugin-svelte3` with `eslint-plugin-svelte`. This includes the `svelte-eslint-parser` package too. This new version is compatible with svelte 3, 4 and 5
  - Removed `parserOptions.ecmaVersion` since it gets already set by env.es2024. See docs [here](https://eslint.org/docs/v8.x/use/configure/language-options).

- _2.0.0_ Updated `eslint-plugin-jsdoc` and `eslint` to address vulnerabilities; updated `eslint-plugin-jest` to address compatibility issue
- _1.1.0_ Added the `cypress` profile
- _1.0.0_ Added the support of the `node` config, include all plugins as dependencies, turn off `implicit-arrow-linebreak`
- _0.1.0_ Initial release.
