module.exports = {
  // https://www.conventionalcommits.org/en/v1.0.0/
  // see https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/index.js
  extends: ["@commitlint/config-conventional"],
  rules: {
    // 'sentence-case', // Sentence case
    'subject-case': [0, 'always', ['sentence-case']],
    "body-max-line-length": [0, "always", 100],
  }
}
