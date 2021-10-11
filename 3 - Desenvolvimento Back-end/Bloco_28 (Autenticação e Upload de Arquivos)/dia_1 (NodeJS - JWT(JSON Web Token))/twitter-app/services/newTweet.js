const Model = require('../models/newTweet');

const Joi = require('joi');

module.exports = async (username, newTweet) => {
  try {

    const { error } = Joi.object({
      username: Joi.not()
      .empty()
      .required(),
      newTweet: Joi.string().min(1).max(280).not()
      .empty()
      .required(),
    }).validate({ username, newTweet });

    if (error) throw Error(error);

    const date = new Date();

    const dataTweet = { username, newTweet, date };

    await Model(dataTweet)
    
    return { message: "Tweet posted", tweet: dataTweet };

  } catch (err) {

    return { err };
    
  }
};