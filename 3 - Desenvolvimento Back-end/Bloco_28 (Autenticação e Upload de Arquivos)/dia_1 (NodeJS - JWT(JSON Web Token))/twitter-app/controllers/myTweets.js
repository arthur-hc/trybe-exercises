const Service = require('../services/getTweets');

module.exports = async (req, res) => {
  const username = req.username;

  try {
    const response = await Service(username);

    if(response.err) throw Error(response.err);

    return res.status(200).json(response);
    
  } catch (err) {
    
    return res.status(404).json({ message: 'Cannot get tweets', reason: err.message });

  }
};