const status = require('http-status');
const { User } = require('../models');
const userService = require('../services/userService');
require('dotenv').config();

const validName = async (req, res, next) => {
  const { displayName } = req.body;

  const isValidDisplayName = userService.isValidDisplayName(displayName);
  
  if (isValidDisplayName) {
    return res.status(status.BAD_REQUEST).json({ message: isValidDisplayName });
  }
    
  next();
};

const validEmail = async (req, res, next) => {
  const { email } = req.body;

  const isValidEmail = userService.isValidEmail(email);

  if (isValidEmail) {
    return res.status(status.BAD_REQUEST).json({ message: isValidEmail });
  }

  next();
};

const validPassword = async (req, res, next) => {
  const { password } = req.body;

  const isValidPassword = userService.isValidPassword(password);
    
  if (isValidPassword) {
    return res.status(status.BAD_REQUEST).json({ message: isValidPassword });
  }

  next();
};

const validUser = async (req, res, next) => {
  const { email } = req.body;

  const existUser = await userService.existUser(email);
  
  if (existUser) {
    return res.status(status.CONFLICT).json({ message: existUser });
  }

  next();
};

const loginUser = async (req, res) => {
  const { email } = req.body;

  const existUser = await userService.existUser(email);
  
  if (!existUser) {
    return res.status(status.BAD_REQUEST).json({ message: 'Invalid fields' });
  }

  const { token } = req.jwtToken;

  return res.status(status.OK).json({ token });
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  
  const { token } = req.jwtToken;

  await User.create({ displayName, email, password, image });
  return res.status(status.CREATED).json({ token });
};

module.exports = { validName, validEmail, validPassword, loginUser, validUser, createUser };