const createUser = require('./user.create');
const getUsers = require('./user.get');
const getUserById = require('./user.get.id');
const updateUser = require('./user.update');
const deleteUser = require ('./user.delete');
const login = require ('./login.controller');

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  login
};