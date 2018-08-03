let mysql = require('mysql');

let connection = mysql.createConnection({
  user: 'root',
  database: 'invesTechSol_JB',
  password: 'rootpasswd',
  host: 'earnings_ratings_db'
});

module.exports = connection;