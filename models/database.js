const util = require('util')
const mysql = require('mysql')
const db = {
	host: process.env.HOST,
	user: process.env.MYSQLUSER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE
};

const pool = mysql.createPool({
	connectionLimit: 10, 
	host: db.host,
	user: db.user,
	password: db.password,
	database: db.database,
	dateStrings: true
});

// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {
	if (err) {
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			console.error('Database connection was closed.')
		}
		if (err.code === 'ER_CON_COUNT_ERROR') {
			console.error('Database has too many connections.')
		}
		if (err.code === 'ECONNREFUSED') {
			console.error('Database connection was refused.')
		}
		if (err.code === 'ER_NOT_SUPPORTED_AUTH_MODE') {
			console.error(`${err.sqlMessage}`)
		}
	}
	
	if (connection) connection.release()

	return
})
// Promisify for Node.js async/await.
pool.getConnection = util.promisify(pool.getConnection);
pool.query = util.promisify(pool.query)

module.exports = pool;