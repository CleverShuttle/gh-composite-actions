'use strict'
const config = require('conventional-changelog-conventionalcommits')

module.exports = config({
  types: [
    {type: 'feat', section: 'Features'},
    {type: 'fix', section: 'Bug Fixes'},
    {type: 'chore', section: 'Chores'},
    {type: 'docs', section: 'Documentation'},
    {type: 'style', section: 'Styles'},
    {type: 'refactor', section: 'Code Refactoring'},
    {type: 'perf', section: 'Performance'},
    {type: 'test', section: 'Tests'},
    {type: 'revert', section: 'Reverts'},
    {type: 'ci', section: 'Continuous Integration'},
  ],
})
