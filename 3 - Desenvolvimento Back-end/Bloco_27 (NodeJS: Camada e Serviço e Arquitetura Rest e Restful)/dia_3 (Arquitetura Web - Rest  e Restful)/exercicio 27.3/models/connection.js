// COM MYSQL
// const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//   host: 'localhost', // Se necessário, substitua pelo seu host, `localhost` é o comum
//   user: 'arthur-hc', // Se necessário, substitua pelo seu usuário para conectar ao banco na sua máquina
//   password: 'trybe12345', // Se necessário, substitua pela sua senha para conectar ao banco na sua máquina
//   database: 'rest_exercicios'});

// module.exports = connection;

// COM MONGODB
// hello-msc/models/connection.js

const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db('rest_exercicios');
      return db;
    })
};

module.exports = connection;