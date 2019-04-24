const { spawn } = require('child_process');
const database = {
  user: process.env.USER || '',
  password: process.env.PASSWORD|| '',
  address: process.env.HOST || '',
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