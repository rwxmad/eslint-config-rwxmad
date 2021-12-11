# eslint-config-rwxmad

![npm](https://img.shields.io/npm/v/eslint-config-rwxmad)
![npm peer dependency version (scoped)](https://img.shields.io/npm/dependency-version/eslint-config-rwxmad/peer/eslint)
![test](https://github.com/rwxmad/eslint-config-rwxmad/actions/workflows/test.yml/badge.svg)

Extended and modified `eslint:recommended` configuration, with prettier plugin

## Install

1. If you don't already have a `package.json` file, create one with `npm init`.

2. Then you need to install everything needed by the config:

```bash
npm install --save-dev eslint eslint-config-rwxmad
```

3. Then, add this to your `.eslintrc` file:

```json
{
  "extends": "eslint-config-rwxmad"
}
```

You can also omit the eslint-config- and it will be automatically assumed by ESLint:

```json
{
  "extends": ["rwxmad"]
}
```

4. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

5. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`.
