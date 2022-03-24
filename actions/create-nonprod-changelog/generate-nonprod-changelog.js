/**
 * Script to generate the changelog for nonProd deployments
 *
 * usage:
 *   node generate-nonprod-changelog.js REPO_BASE_URL
 */
const { execSync } = require("child_process");

const repoBaseUrl = process.argv[2];

if (!repoBaseUrl) {
  console.error("REPO_BASE_URL argument was not provided!");
  process.exit(1);
}

const branches = execSync("git log origin/master..HEAD --oneline | cut -d \" \" -f 2-").toString('utf8');

const isNotEmpty = s => s !== "";

const output = branches
  .split("\n")
  .filter(isNotEmpty)
  .reduce((result, branchName) => `${result}\n* [${branchName}](${repoBaseUrl}/tree/${branchName})`, "**Released branches:**")

console.log(output);
