/**
 * Script that serves to get Jira ticket references
 */

const TICKET_REGEX = /([A-Z]{2,3}-[0-9]{1,5})/gi;

const getTickets = changelog => {
  const tickets = new Set();

  changelog.split('\n').forEach(line => {
    (line.match(TICKET_REGEX) || []).forEach(ticket => {
      tickets.add(ticket);
    });
  });

  return Array.from(tickets).join(',');
};

const HELP_MESSAGE = `usage: CHANGELOG="{GENERATED_CHANGELOG}" node get-jira-tickets.js [-h] [--help]
   
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
    console.log(getTickets(changelog));
    process.exit(0);
  }
};

exec(process.env.CHANGELOG, process.argv.slice(2));
