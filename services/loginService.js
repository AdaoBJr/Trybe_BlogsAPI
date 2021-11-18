const httpStatus = require('http-status');

const generateToken = require('../utils/token');
const validate = require('../utils/validation');

const login = async ({ email, password }) => {
  await validate.login(email, password);
  const token = generateToken(email);
  return ({ status: httpStatus.OK, token });
};

module.exports = { login };
