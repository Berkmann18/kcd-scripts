const slash = require('slash');

// this removes the quotes around strings...
const unquoteSerializer = {
  print: val => val,
  test: val => typeof val === 'string'
};

// this converts windows style file paths to unix...
const winPathSerializer = {
  print: val => slash(val),
  test: val => typeof val === 'string' && val.includes('\\')
};

const relativePathSerializer = {
  print: val => normalizePaths(val),
  test: val => normalizePaths(val) !== val
};

function normalizePaths(value) {
  if (typeof value !== 'string') {
    return value;
  }
  return slash(value.split(process.cwd()).join('<PROJECT_ROOT>'));
}

module.exports = {
  unquoteSerializer,
  winPathSerializer,
  relativePathSerializer
};
