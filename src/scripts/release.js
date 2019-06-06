const spawn = require('cross-spawn');
const {parseEnv, resolveBin} = require('../utils');
const release =
  parseEnv('TRAVIS', false) &&
  process.env.TRAVIS_BRANCH === 'master' &&
  !parseEnv('TRAVIS_PULL_REQUEST', false);

if (release) {
  const result = spawn.sync(resolveBin('semantic-release'), {
    stdio: 'inherit'
  });

  process.exit(result.status);
} else console.log('No release needed');
