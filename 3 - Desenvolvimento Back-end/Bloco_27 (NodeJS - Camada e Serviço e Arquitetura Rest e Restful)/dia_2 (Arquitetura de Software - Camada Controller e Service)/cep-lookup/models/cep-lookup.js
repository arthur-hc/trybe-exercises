const connection = require('./connection');
const axios = require('axios')

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

const cepExists = async (cep) => {
  const cepExists = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  if(cepExists.data.erro) return null
  return true
}

module.exports = {
  getAddressByCep,
  createAddress,
  cepExists,
};
