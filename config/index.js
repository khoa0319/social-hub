require('dotenv').config()
exports = module.exports = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  host: process.env.HOST,
  user: process.env.MYSQLUSER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  defaultPassword: process.env.DEFAULTPASSWORD,
  file: process.env.FILE,
  secretKey: process.env.SECRETKEY
}