const {resolveKcdScripts, resolveBin, isOptedOut} = require('../utils');

const kcdScripts = resolveKcdScripts();
const doctoc = resolveBin('doctoc');

module.exports = {
  concurrent: false,
  linters: {
    'README.md': [`${doctoc} --maxlevel 3 --notitle`, 'git add'],
    '*.+json': [
      isOptedOut('autoformat', '', `${kcdScripts} format`),
      //@todo Add json-fixer here
      isOptedOut('autoformat', '', 'git add')
    ],
    '*.+(js|jsx|yml|yaml|ts|tsx|graphql)': [
      isOptedOut('autoformat', null, `${kcdScripts} format`),
      `${kcdScripts} lint --fix`,
      `${kcdScripts} test --findRelatedTests`,
      isOptedOut('autoformat', null, 'git add')
    ].filter(Boolean),
    '*.+(css|less|scss)': [
      isOptedOut('autoformat', null, `${kcdScripts} format`),
      `${kcdScripts} lint-css --fix`,
      isOptedOut('autoformat', null, 'git add')
    ].filter(Boolean),
    '*.+(md|markdown)': [
      isOptedOut('autoformat', null, `${kcdScripts} format`),
      `${kcdScripts} lint-md`,
      isOptedOut('autoformat', null, 'git add')
    ].filter(Boolean)
  }
};
