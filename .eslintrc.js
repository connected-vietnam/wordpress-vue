const { resolve } = require('path')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@vue/airbnb', 'plugin:flowtype/recommended', "plugin:vue/recommended"],
  plugins: ['flowtype', 'vue', 'jest'],
  rules: {
    camelcase: 0,
    'max-len': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    semi: [2, 'never'],
    'comma-dangle': [2, 'always-multiline'],
    'space-before-function-paren': 0,
    'vue/html-closing-bracket-newline': ['error', { multiline: 'always' }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~': __dirname,
              '~components': resolve(__dirname, 'components'),
              '~pages': resolve(__dirname, 'pages'),
              '~plugins': resolve(__dirname, 'plugins'),
              '~utils': resolve(__dirname, 'utils'),
            },
          },
        },
      },
    },
  },
}
