module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  rules: {
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/dollar-variable-pattern': '^[_a-z]+[a-z0-9-]*$',
    'color-hex-length': 'short',
    'string-quotes': 'double'
  }
};
