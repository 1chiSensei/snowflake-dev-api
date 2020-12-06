const { message, danger } = require('danger');

const mod = danger.git.modified_files.join('- ');
message(`Changed files in this Pull Request: \n - ${mod}`);