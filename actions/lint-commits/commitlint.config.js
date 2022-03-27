module.exports = {
  // see https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-case": [1, "always", "upper-case"],
    "subject-case": [1, "always", "sentence-case"],
    "body-max-line-length": [1, "always", 100],
  },
}
