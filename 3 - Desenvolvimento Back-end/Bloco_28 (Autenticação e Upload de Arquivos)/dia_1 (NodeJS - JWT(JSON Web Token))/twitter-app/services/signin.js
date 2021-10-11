const Model = require('../models/signin');
const findUser = require('../models/findUser');

const Joi = require('joi');

module.exports = async (username, password) => {
  try {
    const bodyData = { username, password };

    const { error } = Joi.object({
      username: Joi.string().min(6).not()
      .empty()
      .required(),
      password: Joi.string().min(6).not()
      .empty()
      .required(),
    }).validate(bodyData);

    if (error) throw Error(error);

    const userExists = await findUser(username);

    if(userExists) throw Error('Username already exists' );
    
    await Model(username, password);

  } catch (err) {
    
    return { err };
  }
}