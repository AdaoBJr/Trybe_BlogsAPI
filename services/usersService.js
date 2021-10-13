const middlewares = require('../middlewares');
const { User } = require('../models');
const tokenGenerate = require('./tokenGenerate');

const createUser = async (body) => {
  const { displayName, email, password, image } = body;
  
  const verifyEmail = await middlewares.verifyEmail(email);
  if (verifyEmail) return verifyEmail;

  const user = await User.create({ displayName, email, password, image });
  return tokenGenerate(user);
};

const getAllUsers = async () => User.findAll();

const userById = async (id) => {
  const verifyUser = await middlewares.verifyUserById(id);
  if (verifyUser.message) return verifyUser;

  return verifyUser;
};

module.exports = {
  createUser,
  getAllUsers,
  userById,
};