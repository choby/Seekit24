
module.exports = {
  env: {
    amd: true,
    commonjs: true,
    node: true
  },
  settings: {
    react: {
      version: "detect", // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
    }
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    "react"
  ],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react/recommended"
  ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "no-extra-boolean-cast": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-prototype-builtins": "off",
    "react/display-name": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-this-alias": "off"
  }
};