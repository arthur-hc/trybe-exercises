const Service = require('../services/newTweet');

module.exports = async (req, res) => {

  try {
    const username = req.username;
    const { newTweet } = req.body;

    const response = await Service(username, newTweet);

    if(response.err) throw Error(response.err);

    return res.status(201).json(response);

  } catch (err) {
    
    return res.status(401).json({ message: 'Cannot tweet this', reason: err.message });

  }
};