const args = [ 'start' ];
const path = '/Users/macintosh/projects/nodejs/social-hub/client';
const opts = { stdio: 'inherit', cwd: path, shell: true };
require('child_process').spawn('npm', args, opts);