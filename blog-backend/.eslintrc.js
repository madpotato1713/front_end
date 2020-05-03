const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  settings: {
    'import/resolver': {
      node: { paths: [path.resolve('./src')]}
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/order': 0,
    'linebreak-style': 0,
    'no-unused-vars': 1,
    'comma-dangle': 0,
    'eol-last': 0,
    'no-console': 0,
    "indent": [
      "error",
      4
    ],
  },
};
