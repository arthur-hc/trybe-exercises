const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'arthur-hc',
  password: 'trybe12345',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;