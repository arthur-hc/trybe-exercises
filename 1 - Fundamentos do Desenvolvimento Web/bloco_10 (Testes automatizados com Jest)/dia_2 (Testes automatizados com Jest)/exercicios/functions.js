// P/ EXERCICIO 1
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

// P/ EXERCICIO 2 E 3
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

const fetch = require('node-fetch');
const getRepos = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json()
    return data.map((repo) => repo.name)
  } catch (error) {
    return error
  }
}

module.exports = {
  uppercase,
  users,
  findUserById,
  getUserName,
  getRepos,
}