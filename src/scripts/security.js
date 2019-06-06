const spawn = require('cross-spawn');
const {resolveBin} = require('../utils');

const args = process.argv.slice(2);

// this ensures that when running format as a pre-commit hook and we get
// the full file path, we make that non-absolute so it is treated as a glob,s
const relativeArgs = args.map(a => a.replace(`${process.cwd()}/`, ''));

const result = spawn.sync(resolveBin('snyk'), ['test', ...relativeArgs], {
  stdio: 'inherit'
});

process.exit(result.status);
