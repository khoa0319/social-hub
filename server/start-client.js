const args = [ 'start' ];
const clientPath =  __dirname.replace('server', 'client');
const opts = { stdio: 'inherit', cwd: clientPath, shell: true };
require('child_process').spawn('npm', args, opts);
//const absolutePath = '/Users/macintosh/projects/nodejs/social-hub/client';
