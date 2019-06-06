const {jest: jestConfig} = require('./dist/config');

module.exports = Object.assign(jestConfig, {
  coverageThreshold: null
});
