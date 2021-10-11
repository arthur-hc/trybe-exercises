const findUser = require('../models/findUser');
const jwt = require('jsonwebtoken');

const Joi = require('joi');

const secret = 'secret';

module.exports = async (username, password) => {
  try {
    const headersData = { username, password };

    const { error } = Joi.object({
      username: Joi.not()
      .empty()
      .required(),
      password: Joi.not()
      .empty()
      .required(),
    }).validate(headersData);

    

    if (error) throw Error(error);

    const user = await findUser(username);

    if(!user || user.password !== password) throw Error('Invalid username or password');
    
    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: user }, secret, jwtConfig);

    return { token };
  
  } catch (err) {
    
    return { err };

  }
};