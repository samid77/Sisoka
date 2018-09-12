const mysql = require('mysql');
const db = mysql.createConnection({ 
  host : 'localhost', 
  port: '8889',
  user : 'root', 
  password : 'root',
  database : 'sisoka',
  multipleStatements: true
});
module.exports = db;