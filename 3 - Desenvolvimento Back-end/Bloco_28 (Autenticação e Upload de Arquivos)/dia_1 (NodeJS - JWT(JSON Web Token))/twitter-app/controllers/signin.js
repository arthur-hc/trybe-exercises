const Service = require('../services/signin');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;
    const response = await Service(username, password);

    if(response && response.err) throw Error(response.err);

    return res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {

    return res.status(500).json({ message: 'Cannot register this user', reason: err.message });

  }
};