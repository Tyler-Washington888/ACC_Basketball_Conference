const mysql = require('mysql')

// create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password'
}) 


module.exports = db
