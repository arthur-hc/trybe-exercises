const jwt = require('jsonwebtoken');
const findUser = require('../models/findUser');

const secret = 'secret';

module.exports = async (req, res, next) => {

  const token = req.headers['authorization'];

  if(!token) {
    return res.status(401).json({ message: 'Not permission', reason: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    const user = await findUser(decoded.data.username);

    if (!user) {
      return res.status(401).json({ message: 'Not permission', reason: 'Cannot found user token' });
    }

    req.username = user.username;

    next();

  } catch (err) {

    return res.status(401).json({ message: 'Not permission', reason: err.message });
    
  }
};