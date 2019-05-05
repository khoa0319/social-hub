const { spawn } = require('child_process');
const database = {
  user: process.env.MYSQLUSER || '',
  password: process.env.PASSWORD|| '',
  address: process.env.HOST || '',
  file: './models/socialhub.sql'
}
console.log(database.user)
console.log(database.address)
console.log(database.password)
console.log(database.file)
let mysqlImport = spawn('mysql', [
  '-u' + database.user,
  '-p' + database.password,
  '-h' + database.address]);
mysqlImport.stdin.write('source' + database.file);
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