const { spawn } = require('child_process');

const database = {
  user: 'root',
  password: 'khoa0319',
  address: 'localhost',
  file: './models/socialhub.sql'
}

let mysqlImport = spawn('mysql', [
  '-u' + database.user,
  '-p' + database.password,
  '-h' + database.address]);
mysqlImport.stdin.write('source ' + database.file);
mysqlImport.stdin.end();

mysqlImport.stdout
  .on('data', function (data) {
    console.log(data);
  })
  .on('finish', function () {
    console.log('finished')
  })
  .on('error', function (err) {
    console.log(err)
  });