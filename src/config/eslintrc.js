const {ifAnyDep} = require('../utils')

module.exports = {
  env: {node: true, jest: true},
  plugins: ['security', 'jquery'],
  extends: [
    'eslint:recommended',
    'plugin:security/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible',
    'plugin:node/recommended',
    ...[
      ifAnyDep('react', require.resolve('eslint-config-kentcdodds/jsx-a11y')),
      ifAnyDep('react', require.resolve('eslint-config-kentcdodds/react')),
    ].filter(Boolean),
  ],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error'],
    'no-console': 'warn',
    quotes: ['error', 'single'],
    'no-trailing-spaces': ['error'],
    'symbol-description': ['warn'],
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
  },
}
