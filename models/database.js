const util = require('util')
const mysql = require('mysql')
const config = require('../config')

const pool = mysql.createPool({
	connectionLimit: 20,
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database,
	dateStrings: true
});

// Ping database to check for common exception errors.
pool.getConnection( async (err, connection) => {
	
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
pool.query = util.promisify(pool.query);

module.exports = pool;