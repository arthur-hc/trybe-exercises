const connect = require('./connection');

module.exports = async (dataTweet) => {
  const db = await connect();
  try {

    await db.collection('tweets').insertOne(dataTweet);

  } catch (err) {
    
    return err
  }
};