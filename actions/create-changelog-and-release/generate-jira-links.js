/**
 * Script that serves to generate GitHub links from git messages.
 */
const { execSync } = require("child_process");


const INITIAL_REGEX = new RegExp(/.*[Rr][Ee][Ff][Ss]?\:\s*([a-zA-Z]{2,3})[_\- ]?([0-9]{1,5})(.*)/gi);
const FOLLOWUP_REGEX = new RegExp(/\s*,?\s*([a-zA-Z]{2,3})[_\- ]?([0-9]{1,5})(.*)/gi);

const parse = (regex, input) => {
  let output = [];
  input.replace(regex, (...arguments) => {
    matched = arguments.slice(1, -2);
    if (matched.length >= 2) {
      const ticketNumber = matched[1].replace(/^0(.*)/, "$1");
      output = output.concat([`[${matched[0]}-${ticketNumber}](https://clevershuttle.atlassian.net/browse/${matched[0]}-${ticketNumber})`]);

      if (matched.length > 2) {
        output = output.concat(parse(FOLLOWUP_REGEX, matched[2]));
      }
    }
    return "whatever";
  })

  return output;
};


const findAllCommitHashes = (changelog) => {
  const lines = changelog.split("\n");
  const regex = new RegExp(/\*.*\[([0-9a-f]{7})\]/);

  return lines
  .map((line) => {
    const result = regex.exec(line);

    if (result === null) {
      return line;
    }

    const commitHash = result[1];
    const gitMessage = execSync(`git log -n 1 ${commitHash}`).toString('utf8');
    const links = parse(INITIAL_REGEX, gitMessage);

    return links.length > 0 ? `${line} | JIRA ${links.join(", ")}` : line;
  })
  .join("\n");
}

const HELP_MESSAGE = `usage: CHANGELOG="{GENERATED_CHANGELOG}" node find-jira-links.js [-h] [--help]

description: This script looks for references to github tickets in commit
messages. These references must have the form: 'Refs: ABC-1234' where ABC can
be any 2 or 3 letters and 1234 can be between 1 and 4 digits.`;

const exec = (changelog, options) => {
  if (options[0] === "--help" || options[0] === '-h') {
    console.log(HELP_MESSAGE);
  } else if (!changelog) {
    console.error("You must provide a CHANGELOG environment variable!");
    console.log(HELP_MESSAGE);
    process.exit(1);
  } else {
    console.log(findAllCommitHashes(changelog));
    process.exit(0);
  }
}

exec(process.env.CHANGELOG, process.argv.slice(2));
