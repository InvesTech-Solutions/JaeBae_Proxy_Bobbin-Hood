let mysql = require('mysql');

let connection = mysql.createConnection({
  user: 'root',
  database: 'invesTechSol_JB'
});

connection.connect();

module.exports = connection;