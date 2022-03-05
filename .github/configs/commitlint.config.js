module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-case": [1, "always", "upper-case"],
    "subject-case": [1, "always", "sentence-case"],
    "body-max-line-length": [1, "always", 100],
  },
}
