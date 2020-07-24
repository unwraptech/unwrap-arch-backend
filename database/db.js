var mysql = require('mysql');
require('dotenv').config()
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'unwraptech'
  });
// console.log(con);
  con.connect();
module.exports =con;