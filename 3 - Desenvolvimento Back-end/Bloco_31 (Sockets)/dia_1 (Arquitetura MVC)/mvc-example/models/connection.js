const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'arthur-hc',
  password: 'trybe12345',
  database: 'mvc_example'});

module.exports = connection;