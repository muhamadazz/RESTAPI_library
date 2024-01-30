var mysql = require('mysql');

// create database connection
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'library'

});

conn.connect((err) => {
    if(err) throw err;
    console.log('mysql is connected')
});

module.exports = conn;