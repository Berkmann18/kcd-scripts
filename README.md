<div align="center">
<h1>mb-scripts 🛠📦</h1>

<p>CLI toolbox for common scripts for my projects (largely based on [kcd-scripts](https://github.com/kentcdodds/kcd-scripts)</p>
</div>

<hr />

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmcharts]
[![MIT License][license-badge]][license]

[![All Contributors](https://img.shields.io/badge/all_contributors-13-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## The problem

I work on a lot of projects that uses the same development configurations and commands and it's a pain to duplicate efforts that could be merge in one place.

## This solution

This is a CLI that abstracts away all configuration for my open source projects
for linting, testing, building, and more.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
  - [Overriding Config](#overriding-config)
  - [Flow support](#flow-support)
- [Other Solutions](#other-solutions)
- [Contributors](#contributors)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev mb-scripts
```

## Usage

This is a CLI and exposes a bin called `mb-scripts`. I don't really plan on
documenting or testing it super duper well because it's really specific to my
needs. You'll find all available scripts in `src/scripts`.

This project actually dogfoods itself. If you look in the `package.json`, you'll
find scripts with `node src {scriptName}`. This serves as an example of some
of the things you can do with `mb-scripts`.

### Overriding Config

Unlike `react-scripts`, `mb-scripts` allows you to specify your own
configuration for things and have that plug directly into the way things work
with `mb-scripts`. There are various ways that it works, but basically if you
want to have your own config for something, just add the configuration and
`mb-scripts` will use that instead of it's own internal config. In addition,
`mb-scripts` exposes its configuration so you can use it and override only
the parts of the config you need to.

This can be a very helpful way to make editor integration work for tools like
ESLint which require project-based ESLint configuration to be present to work.

So, if we were to do this for ESLint, you could create an `.eslintrc` with the
contents of:

```
{"extends": "./node_modules/mb-scripts/eslint.js"}
```

Or, for `babel`, a `.babelrc` with:

```
{"presets": ["mb-scripts/babel"]}
```

Or, for `jest`:

```javascript
const {jest: jestConfig} = require('mb-scripts/config');
module.exports = Object.assign(jestConfig, {
  // your overrides here

  // for test written in Typescript, add:
  transform: {
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  }
});
```

> Note: `mb-scripts` intentionally does not merge things for you when you start
> configuring things to make it less magical and more straightforward. Extending
> can take place on your terms. I think this is actually a great way to do this.

### Flow support

If the `flow-bin` is a dependency on the project the `@babel/preset-flow` will automatically get loaded when you use the default babel config that comes with `mb-scripts`. If you customised your `.babelrc`-file you might need to manually add `@babel/preset-flow` to the `presets`-section.

## Other Solutions

I'm not aware of any, if you are please [make a pull request][prs] and add it
here! Again, this is a very specific-to-me solution.

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://kentcdodds.com"><img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;" alt="Kent C. Dodds"/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="https://github.com/Berkmann18/mb-scripts/commits?author=kentcdodds" title="Code">💻</a> <a href="https://github.com/Berkmann18/mb-scripts/commits?author=kentcdodds" title="Documentation">📖</a> <a href="#infra-kentcdodds" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/Berkmann18/mb-scripts/commits?author=kentcdodds" title="Tests">⚠️</a></td><td align="center"><a href="https://github.com/sudo-suhas"><img src="https://avatars2.githubusercontent.com/u/22251956?v=4" width="100px;" alt="Suhas Karanth"/><br /><sub><b>Suhas Karanth</b></sub></a><br /><a href="https://github.com/Berkmann18/mb-scripts/commits?author=sudo-suhas" title="Code">💻</a> <a href="https://github.com/Berkmann18/mb-scripts/issues?q=author%3Asudo-suhas" title="Bug reports">🐛</a> <a href="https://github.com/Berkmann18/mb-scripts/commits?author=sudo-suhas" title="Tests">⚠️</a></td><td align="center"><a href="https://github.com/pbomb"><img src="https://avatars0.githubusercontent.com/u/1402095?v=4" width="100px;" alt="Matt Parrish"/><br /><sub><b>Matt Parrish</b></sub></a><br /><a href="https://github.com/Berkmann18/mb-scripts/commits?author=pbomb" title="Code">💻</a> <a href="https://github.com/Berkmann18/mb-scripts/commits?author=pbomb" title="Tests">⚠️</a></td><td align="center"><a href="https://github.com/mateuscb"><img src="https://avatars3.githubusercontent.com/u/1319157?v=4" width="100px;" alt="Mateus"/><br /><sub><b>Mateus</b></sub></a><br /><a href="https://github.com/Berkmann18/mb-scripts/commits?author=mateuscb" title="Code">💻</a> <a href="https://github.com/Berkmann18/mb-scripts/commits?author=mateuscb" title="Tests">⚠️</a></td><td align="center"><a href="http://macklin.underdown.me"><img src="https://avatars1.githubusercontent.com/u/2344137?v=4" width="100px;" alt="Macklin Underdown"/><br /><sub><b>Macklin Underdown</b></sub></a><br /><a href="https://github.com/Berkmann18/mb-scripts/commits?author=macklinu" title="Code">💻</a> <a href="https://github.com/Berkmann18/mb-scripts/commits?author=macklinu" title="Tests">⚠️</a></td><td align="center"><a href="https://github.com/stereobooster"><img src="https://avatars2.githubusercontent.com/u/179534?v=4" width="100px;" alt="stereobooster"/><br /><sub><b>stereobooster</b></sub></a><br /><a href="https://github.com/Berkmann18/mb-scripts/commits?author=stereobooster" title="Code">💻</a> <a href="https://github.com/Berkmann18/mb-scripts/commits?author=stereobooster" title="Tests">⚠️</a></td><td align="center"><a href="http://dsds.io"><img src="https://avatars0.githubusercontent.com/u/410792?v=4" width="100px;" alt="Dony Sukardi"/><br /><sub><b>Dony Sukardi</b></sub></a><br /><a href="https://github.com/Berkmann18/mb-scripts/issues?q=author%3Adonysukardi" title="Bug reports">🐛</a> <a href="https://github.com/Berkmann18/mb-scripts/commits?author=donysukardi" title="Code">💻</a></td></tr><tr><td align="center"><a href="https://alexandernanberg.com"><img src="https://avatars3.githubusercontent.com/u/8997319?v=4" width="100px;" alt="Alexander Nanberg"/><br /><sub><b>Alexander Nanberg</b></sub></a><br /><a href="https://github.com/Berkmann18/mb-scripts/commits?author=alexandernanberg" title="Code">💻</a></td><td align="center"><a href="https://github.com/fobbyal"><img src="https://avatars2.githubusercontent.com/u/7818365?v=4" width="100px;" alt="Alex Liang"/><br /><sub><b>Alex Liang</b></sub></a><br /><a href="https://github.com/Berkmann18/mb-scripts/commits?author=fobbyal" title="Code">💻</a></td><td align="center"><a href="http://www.jeffdetmer.com"><img src="https://avatars1.githubusercontent.com/u/649578?v=4" width="100px;" alt="Jeff Detmer"/><br /><sub><b>Jeff Detmer</b></sub></a><br /><a href="https://github.com/Berkmann18/mb-scripts/commits?author=shellthor" title="Code">💻</a></td><td align="center"><a href="https://twitter.com/endymion_r"><img src="https://avatars3.githubusercontent.com/u/93752?v=4" width="100px;" alt="Alex Zherdev"/><br /><sub><b>Alex Zherdev</b></sub></a><br /><a href="https://github.com/Berkmann18/mb-scripts/commits?author=alexzherdev" title="Code">💻</a></td><td align="center"><a href="https://github.com/adamdharrington"><img src="https://avatars0.githubusercontent.com/u/5477801?v=4" width="100px;" alt="Adam Harrington"/><br /><sub><b>Adam Harrington</b></sub></a><br /><a href="https://github.com/Berkmann18/mb-scripts/commits?author=adamdharrington" title="Code">💻</a> <a href="https://github.com/Berkmann18/mb-scripts/commits?author=adamdharrington" title="Tests">⚠️</a></td><td align="center"><a href="http://maxcubing.wordpress.com"><img src="https://avatars0.githubusercontent.com/u/8260834?v=4" width="100px;" alt="Maximilian Berkmann"/><br /><sub><b>Maximilian Berkmann</b></sub></a><br /><a href="https://github.com/Berkmann18/mb-scripts/commits?author=Berkmann18" title="Code">💻</a> <a href="#maintenance-Berkmann18" title="Maintenance">🚧</a> <a href="#ideas-Berkmann18" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/Berkmann18/mb-scripts/commits?author=Berkmann18" title="Documentation">📖</a> <a href="https://github.com/Berkmann18/mb-scripts/commits?author=Berkmann18" title="Tests">⚠️</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/Berkmann18/mb-scripts.svg?style=flat-square
[build]: https://travis-ci.org/Berkmann18/mb-scripts
[coverage-badge]: https://img.shields.io/codecov/c/github/Berkmann18/mb-scripts.svg?style=flat-square
[coverage]: https://codecov.io/github/Berkmann18/mb-scripts
[version-badge]: https://img.shields.io/npm/v/mb-scripts.svg?style=flat-square
[package]: https://www.npmjs.com/package/mb-scripts
[downloads-badge]: https://img.shields.io/npm/dm/mb-scripts.svg?style=flat-square
[npmcharts]: http://npmcharts.com/compare/mb-scripts
[license-badge]: https://img.shields.io/npm/l/mb-scripts.svg?style=flat-square
[license]: https://github.com/Berkmann18/mb-scripts/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/Berkmann18/mb-scripts/blob/master/other/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/Berkmann18/mb-scripts.svg?style=social
[github-watch]: https://github.com/Berkmann18/mb-scripts/watchers
[github-star-badge]: https://img.shields.io/github/stars/Berkmann18/mb-scripts.svg?style=social
[github-star]: https://github.com/Berkmann18/mb-scripts/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20mb-scripts!%20https://github.com/Berkmann18/mb-scripts%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/Berkmann18/mb-scripts.svg?style=social
[emojis]: https://allcontributors.org/docs/en/emoji-key
[all-contributors]: https://github.com/all-contributors/all-contributors
