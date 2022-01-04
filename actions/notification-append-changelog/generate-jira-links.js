/**
 * Script that serves to generate jira links from git scopes.
 */

const SUBDOMAIN = 'clevershuttle';
const TICKET_REGEX = /([A-Z]{2,3}-[0-9]{1,5})/gi;

const getTicketWithLink = ticket =>
  `[${ticket}](https://${SUBDOMAIN}.atlassian.net/browse/${ticket})`;

const linkTickets = changelog =>
  changelog
    .split('\n')
    .map(line => line.replace(TICKET_REGEX, getTicketWithLink))
    .join('\n');

const HELP_MESSAGE = `usage: CHANGELOG="{GENERATED_CHANGELOG}" node find-jira-links.js [-h] [--help]
 
 description: This script looks for references to Jira tickets in commit
 scopes. These references must have the form: 'ABC-1234' where ABC (project) can
 be any 2 or 3 letters and 1234 (ticket id) can be between 1 and 5 digits.`;

const exec = (changelog, options) => {
  if (options[0] === '--help' || options[0] === '-h') {
    console.log(HELP_MESSAGE);
  } else if (!changelog) {
    console.error('You must provide a CHANGELOG environment variable!');
    console.log(HELP_MESSAGE);
    process.exit(1);
  } else {
    console.log(linkTickets(changelog));
    process.exit(0);
  }
};

exec(process.env.CHANGELOG, process.argv.slice(2));
