const getPosts = require('../controllers/posts');
const createUsers = require('../controllers/createUser');
const login = require('../controllers/login');
const getUserById = require('../controllers/getUserById');

module.exports = {
  getPosts,
  createUsers,
  login,
  getUserById,
};
