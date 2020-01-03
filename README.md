# eslint-config-tao

Shareable `.eslintrc` configurations package for `oat-sa` projects.

## Concept

All extensions, projects and libraries under (`oat-sa` wide) should use the shared config as a basis.
Current extension contains a pack of shareable configs depending on the stack and target.
General idea is described here: [https://eslint.org/docs/developer-guide/shareable-configs]()

### Examples

There're 2 ways to use the appropriate `.eslintrc` config in the project you want:
- via `npm postinstall script`
- extending your current `.eslintrc` config.

#### NPM postintall script

Lets take a `oat-sa/package-tao` project.

1. Edit the `tao/views/package.josn` file
2. Add the `postinstall` script:
```json
{
  "scripts": {
    "postinstall": "cp $INIT_CWD/node_modules/@oat-sa/eslint-config-tao/config/tao-amd/.eslintrc ../../.eslintrc"
  }
}
``` 
3. run `npm install`.
4. `.eslintrc` should be copied to the project root directory. 

#### Extend current `.eslintrc` config

Lets take a `oat-sa/live-design-system`.

1. Edit the `.eslintrc.js` in the root of the project:
```javascript
module.exports = {
    extends: "./node_modules/@oat-sa/eslint-config-tao/config/tao-new/eslintrc.js"
}
```
2. run `npm install`.

## Release history
 
 * _0.1.0_ Initial release.
