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
  !hasFile('.remarkrc') &&
  !hasFile('.remarkrc.js') &&
  !hasPkgProp('remarkConfig');

const config = useBuiltinConfig ? ['-r', hereRelative('../config/remarkrc.js')] : [];

const useBuiltinIgnore =
  !args.includes('--ignore-path') && !hasFile('.remarkignore') && !hasPkgProp('remarkIgnore');

const ignore = useBuiltinIgnore ? ['-i', hereRelative('../config/remarkignore')] : [];

const filesGiven = parsedArgs._.length > 0;

const filesToApply = filesGiven ? [] : ['.'];

if (filesGiven) {
  //Keep the MD files
  args = args.filter(a => !parsedArgs._.includes(a) || /\.(md|markdown)$/.test(a));
}

const result = spawn.sync(resolveBin('remark'), [...config, ...ignore, ...args, ...filesToApply], {
  stdio: 'inherit'
});

process.exit(result.status);
