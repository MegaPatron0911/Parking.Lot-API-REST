const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'oswal',
  password: 'tuputamadre09112004',
  database: 'parkinglot',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
