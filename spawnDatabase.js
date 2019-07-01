const { spawn } = require('child_process');
const config = require('./config');

// let mysqlImport = spawn('mysql', [
//   '-u' + db.user,
//   '-p' + db.password,
//   '-h' + db.address]);
// mysqlImport.stdin.write('source ' + db.file + '\n');

// mysqlImport.stdin.write('CREATE db IF NOT EXISTS SocialHub; \n');
// mysqlImport.stdin.write('exit \n');
let command = process.platform === 'win32' ? 'cmd.exe' : 'bash'
let mysqlImport = spawn(command, {
  cwd: process.cwd()
})

mysqlImport.stdin.write(`mysql -u${config.user} -p${config.password} -e "CREATE DATABASE IF NOT EXISTS ${config.name};" \n`);
mysqlImport.stdin.write(`mysql -u${config.user} -p${config.password} ${config.name} < ${config.file} \n`);
mysqlImport.stdin.end(() => {
  console.log(`Database ${config.database} migrated`);
});

mysqlImport.stdout
  .on('data', function (data) {
    console.log(data.toString('utf8'));
  })
  .on('finish', function () {
    console.log('finished')
  })
  .on('error', function (err) {
    console.log(err)
  })

mysqlImport.stderr
  .on('data', function (data) {
    console.log(data.toString('utf8'));
  })
  .on('finish', function () {
    console.log('finished')
  })
  .on('error', function (err) {
    console.log(err)
  })

mysqlImport.on('close', (code, signal) => {
  console.log(`Child process exited with code ${code}`);
})
