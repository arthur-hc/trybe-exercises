const connect = require('./connection');

module.exports = async (username, password) => {
  const db = await connect();
  try {

    await db.collection('users').insertOne({ username, password });

  } catch (err) {
    
    return err
  }
};