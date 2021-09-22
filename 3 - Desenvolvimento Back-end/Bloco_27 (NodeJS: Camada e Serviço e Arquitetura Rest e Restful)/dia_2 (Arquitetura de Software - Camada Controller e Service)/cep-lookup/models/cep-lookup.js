const connection = require('./connection');

const getAddressByCep = async (cep) => {
  const [result] = await connection.execute('SELECT * FROM ceps WHERE cep=?', [cep]);
  if(result.length === 0) return null;
  return result;
}

const createAddress = async (logradouro, bairro, localidade, uf, cep) => {
  try {
    const newAddress = await connection.execute('INSERT INTO cep_lookup.ceps (logradouro, bairro, localidade, uf, cep) VALUES(?, ?, ?, ?, ?)',
    [logradouro, bairro, localidade, uf, cep]
    );
    return newAddress
  } catch (error) {
    console.log(error.message)
    return null
  }
};

module.exports = {
  getAddressByCep,
  createAddress,
};
