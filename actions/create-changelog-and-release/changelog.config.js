'use strict';
const config = require('conventional-changelog-conventionalcommits');

module.exports = config({
  types: [
    { type: 'feat', section: "🎉 New Features" },
    { type: 'feature', section: "🎉 New Features" },
    { type: 'fix', section: "🐛 Bugfixes" },
    { type: 'bugfix', section: "🐛 Bugfixes" },
    { type: 'improvements', section: "🔨 Improvements" },
    { type: 'enhancement', section: "🔨 Improvements" },
    { type: 'perf', section: "🏎️ Performance Improvements" },
    { type: 'build', section: "🏗️ Build System" },
    { type: 'ci', section: "🏗️ Build System" },
    { type: 'refactor', section: "🪚 Refactors" },
    { type: 'doc', section: "📚 Documentation Changes" },
    { type: 'docs', section: "📚 Documentation Changes" },
    { type: 'test', section: "🧪 Tests" },
    { type: 'tests', section: "🧪 Tests" },
    { type: 'style', section: "💅 Code Style Changes" },
    { type: 'chore', section: "🧹 Chores" },
    { type: 'revert', section: '🔙 Reverts' },
    { type: '*!', section: '⚠️ BREAKING CHANGES' },
    { type: 'other', section: '💚 Other Changes' }
  ]
});
