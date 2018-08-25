module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-restricted-globals': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
