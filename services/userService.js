const { User } = require('../models');

const validateCreate = async ({ displayName, email, password, image }) => {
  const userCreate = await User.create({ displayName, email, password, image });
  return userCreate;
};

module.exports = {
  validateCreate,
};