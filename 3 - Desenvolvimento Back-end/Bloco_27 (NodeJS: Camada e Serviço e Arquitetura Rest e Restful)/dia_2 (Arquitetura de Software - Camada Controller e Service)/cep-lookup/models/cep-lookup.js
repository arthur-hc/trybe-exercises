const connection = require('./connection');

const getAddressByCep = async (cep) => {
  const [result] = await connection.execute('SELECT * FROM ceps WHERE cep=?', [cep]);
  return result;
}

module.exports = {
  getAddressByCep,
}