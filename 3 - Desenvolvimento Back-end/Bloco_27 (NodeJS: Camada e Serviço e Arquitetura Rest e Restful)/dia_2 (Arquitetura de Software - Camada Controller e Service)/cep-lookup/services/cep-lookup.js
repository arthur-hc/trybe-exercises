const Joi = require('joi');
const models = require('../models/cep-lookup');

const withoutHyphen = (value) => value.replace('-', '');
const cepValidations = (cep, hasHyphen) => {
  switch (true) {
    case hasHyphen === undefined:
      return Joi.string().not().empty().required().pattern(/\d{5}-?\d{3}/).validate(cep);
    case hasHyphen === true:
      return Joi.string().not().empty().required().pattern(/\d{5}-\d{3}/).validate(cep);
    case hasHyphen === false:
      return Joi.string().not().empty().required().pattern(/\d{8}/).validate(cep);
    default:
      break;
  }
};

const addressValidations = (logradouro, bairro, localidade, uf) => {
  const addrress = { logradouro, bairro, localidade, uf };
  return Joi.object({
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate(addrress);
}

const formatedAddress = (data) => {
  const { cep, logradouro, bairro, localidade, uf } = data;
  const formatedCep = {
    cep: `${cep.substring(0, 5)}-${cep.substring(5,8)}`,
    logradouro,
    bairro,
    localidade,
    uf,
  }
  return formatedCep
} 

const getAddressByCep = async (cep) => {
  const { error } = cepValidations(cep);
  if(error) return { error: { code: "invalidData", message: "CEP inválido" } };

  const address = await models.getAddressByCep(withoutHyphen(cep));
  if(!address) return { error: { code: "notFound", message: "CEP não encontrado" } }
  return formatedAddress(address[0]);
}

const createAddress = async (logradouro, bairro, localidade, uf, cep) => {
  const cepValidationsResult = cepValidations(cep, true);
  if(cepValidationsResult.error) return { error: { code: "invalidData", message: cepValidationsResult.error } };

  const addressValidationsResult = addressValidations(logradouro, bairro, localidade, uf);
  if(addressValidationsResult.error) return { error: { code: "invalidData", message: addressValidationsResult } };

  const cepAlreadyExists = await models.getAddressByCep(withoutHyphen(cep));
  if(cepAlreadyExists) return { error: { code: "alreadyExists", message: "CEP já existente" } };

  const newAddress = await models.createAddress(logradouro, bairro, localidade, uf, withoutHyphen(cep));
  if(!newAddress) return { error: { code: "InternalError", message: "Houve um problema interno" } }
  return { cep, logradouro, bairro, localidade, uf };
}

module.exports = {
  getAddressByCep,
  createAddress,
};