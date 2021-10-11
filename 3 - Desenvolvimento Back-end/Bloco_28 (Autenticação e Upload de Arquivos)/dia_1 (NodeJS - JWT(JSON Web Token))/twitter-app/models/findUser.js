const connect = require('./connection');

module.exports = async (username) => {
  const db = await connect();
  const userData = await db.collection('users').findOne({ username });
  return userData;
};