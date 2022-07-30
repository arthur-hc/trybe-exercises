const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'arthur-hc',
  password: 'trybe12345',
  host: 'localhost',
  database: 'cep_lookup'
});

module.exports = connection;
