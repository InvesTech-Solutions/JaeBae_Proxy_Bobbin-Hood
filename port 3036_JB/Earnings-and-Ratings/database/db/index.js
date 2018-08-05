let mysql = require('mysql');

let connection = mysql.createConnection({
  user: 'root',
  database: 'invesTechSol_JB',
  host: 'earnings_ratings_db',
  password: 'rootpasswd'
});

module.exports = connection;