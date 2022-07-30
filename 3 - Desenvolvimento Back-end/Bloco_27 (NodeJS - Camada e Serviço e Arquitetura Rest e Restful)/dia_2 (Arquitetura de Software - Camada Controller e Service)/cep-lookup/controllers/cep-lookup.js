const services = require('../services/cep-lookup');

const StatusCode = {
  InternalError: 500,
  alreadyExists: 409,
  notFound: 404,
  invalidData: 400,
  created: 201,
  ok: 200,
}

const getAddressByCep = async (req, res) => {
  const { cep } = req.params;  

  const address = await services.getAddressByCep(cep);
  if(address.error) return res.status(StatusCode[address.error.code]).json(address.error);
  return res.status(StatusCode.ok).json(address)
}

const createAddress = async (req, res) => {
  const { logradouro, bairro, localidade, uf, cep } = req.body;

  const newAddress = await services.createAddress(logradouro, bairro, localidade, uf, cep);

  if(newAddress.error) return res.status(StatusCode[newAddress.error.code]).json(newAddress.error);
  return res.status(StatusCode.created).json(newAddress);

};

module.exports = {
  getAddressByCep,
  createAddress,
}
