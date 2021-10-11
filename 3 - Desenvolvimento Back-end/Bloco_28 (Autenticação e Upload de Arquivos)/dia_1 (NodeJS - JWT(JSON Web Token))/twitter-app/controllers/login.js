const Service = require('../services/login');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.headers;
    const response = await Service(username, password);

    if(response.err) throw Error(response.err);

    return res.status(200).json(response)
    
  } catch (err) {

    return res.status(401).json({ message: 'Cannot log-in', reason: err.message });
  }
}