const path = require('path');
const spawn = require('cross-spawn');
const yargsParser = require('yargs-parser');
const {hasPkgProp, resolveBin, hasFile} = require('../utils');

let args = process.argv.slice(2);
const here = p => path.join(__dirname, p);
const hereRelative = p => here(p).replace(process.cwd(), '.');
const parsedArgs = yargsParser(args);

const useBuiltinConfig =
  !args.includes('--config') &&
  !hasFile('.stylelintrc') &&
  !hasFile('.stylelintrc.js') &&
  !hasPkgProp('stylelintConfig');

const config = useBuiltinConfig ? ['--config', hereRelative('../config/stylelintrc.js')] : [];

const filesGiven = parsedArgs._.length > 0;

const filesToApply = filesGiven ? [] : ['.'];

if (filesGiven) {
  // Keep the CSS files
  args = args.filter(a => !parsedArgs._.includes(a) || /\.(s?c|le)ss$/.test(a));
}

const result = spawn.sync(resolveBin('stylelint'), [...config, ...args, ...filesToApply], {
  stdio: 'inherit'
});

process.exit(result.status);
