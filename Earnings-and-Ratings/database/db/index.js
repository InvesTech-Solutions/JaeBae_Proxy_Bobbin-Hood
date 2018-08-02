let mysql = require('mysql');

let connection = mysql.createConnection({
  user: 'root',
  database: 'invesTechSol_JB',
  port: 3036
});

connection.connect();

module.exports = connection;