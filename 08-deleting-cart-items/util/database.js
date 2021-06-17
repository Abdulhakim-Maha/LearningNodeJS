const mysql = require('mysql2')

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	database: 'node-conplete',
	password: 'austiniqer'
})

module.exports = pool.promise();