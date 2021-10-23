const jwt = require('jsonwebtoken');

require('dotenv').config();

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const token = async (body) => {
  const { id, displayName, email } = body;
  const newToken = jwt.sign({ id, displayName, email }, secret, jwtConfig);
  return newToken;
};

module.exports = { token };
