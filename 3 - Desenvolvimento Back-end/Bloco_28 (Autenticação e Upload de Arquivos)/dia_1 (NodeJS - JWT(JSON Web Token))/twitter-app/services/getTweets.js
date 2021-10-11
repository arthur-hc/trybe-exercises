const Model = require('../models/getTweets');
const findUser = require('../models/findUser');

module.exports = async (username) => {
  try {
    const userExists = await findUser(username);

    if(!userExists) throw Error('User Not Found' );

    const response = await Model(username);

    return response
    
  } catch (err) {
    
    return { err }
  }
};
