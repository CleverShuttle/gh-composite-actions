'use strict';
const config = require('conventional-changelog-conventionalcommits');

module.exports = config({
  types: [
    { type: 'feat', section: "๐ New Features" },
    { type: 'feature', section: "๐ New Features" },
    { type: 'fix', section: "๐ Bugfixes" },
    { type: 'bugfix', section: "๐ Bugfixes" },
    { type: 'improvements', section: "๐จ Improvements" },
    { type: 'enhancement', section: "๐จ Improvements" },
    { type: 'perf', section: "๐ Performance Improvements" },
    { type: 'build', section: "๐  Build System" },
    { type: 'ci', section: "๐  Build System" },
    { type: 'refactor', section: "๐ช Refactors" },
    { type: 'doc', section: "๐ Documentation Changes" },
    { type: 'docs', section: "๐ Documentation Changes" },
    { type: 'test', section: "๐งช Tests" },
    { type: 'tests', section: "๐งช Tests" },
    { type: 'style', section: "๐ Code Style Changes" },
    { type: 'chore', section: "๐งน Chores" },
    { type: 'revert', section: '๐ Reverts' },
    { type: '*!', section: 'โ ๏ธ BREAKING CHANGES' },
    { type: 'other', section: '๐ Other Changes' }
  ]
});
