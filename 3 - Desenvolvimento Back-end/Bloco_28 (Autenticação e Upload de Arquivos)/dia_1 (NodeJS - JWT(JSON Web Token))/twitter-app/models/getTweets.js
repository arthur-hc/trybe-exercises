const connect = require('./connection');

module.exports = async (username) => {
  const db = await connect();
  const tweets = await db.collection('tweets').find({ username }).toArray();
  if(tweets.length < 1) {
    return { message: 'No tweets yet' }
  }
  return tweets;
};
