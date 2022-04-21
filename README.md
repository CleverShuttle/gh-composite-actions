# GitHub Composite-Actions

The repository provides all GitHub composite-actions. [Click here for the documentation](https://clevershuttle.atlassian.net/wiki/spaces/CI/pages/3607494720/Workflows)

## Security hint

Use intermediate environment variables and double quote shell variables
([see examples on GitHub](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#good-practices-for-mitigating-script-injection-attacks))
to [mitigate script injections](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections).

## Development

* You can change the composite actions and push to master (potentially via a PR) which updates the tag that the [reusable workflows](https://github.com/CleverShuttle/gh-reusable-workflows) refer to. Your changes are effective globally on the next run of the composite action.
* You may create a PR and refer to the branch of the PR in a [reusable workflow](https://github.com/CleverShuttle/gh-reusable-workflows) and refer to that reusable workflow in a GitHub repository by using `@<branch name>` instead of `@v1` when referring to the composite action and reusable workflow. This allows you to test risky changes.
* You may also [use act to develop the composite action locally](https://clevershuttle.atlassian.net/wiki/spaces/CI/pages/3613688270/How-to+Run+your+GitHub+Actions+locally)

## Code owners

See [CODEOWNERS](CODEOWNERS)
