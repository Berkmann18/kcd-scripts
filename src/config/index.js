module.exports = {
  babel: require('./babelrc'),
  eslint: require('./eslintrc'),
  jest: require('./jest.config'),
  lintStaged: require('./lintstagedrc'),
  prettier: require('./prettierrc'),
  getRollupConfig: () => require('./rollup.config'),
  remark: require('./remarkrc'),
  release: require('./releaserc'),
  stylelint: require('./stylelintrc')
};
