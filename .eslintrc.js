module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'], //jest
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  env: {
    browser: true,
    es6: true,
    // jest: true,
    node: true,
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'no-unused-vars': 2,
      },
    },
  ],
  rules: {
    'no-unused-vars': 2,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'consistent-return': [0, { treatUndefinedAsUnspecified: true }],
  },
};
