require('dotenv/config');

const { User } = require('../models');
const UserValidation = require('../schemas/users.validation');

const createUser = async (displayName, email, password, image) => {
  UserValidation.verifyDisplayName(displayName);
  UserValidation.verifyEmail(email);
  UserValidation.verifyPassword(password);
  await UserValidation.userExists(email);
  try {
    const newUser = await User.create({
      displayName,
      email,
      password,
      image,
    });
    return newUser;
  } catch (error) {
    return error;
  }
};

module.exports = { createUser };
