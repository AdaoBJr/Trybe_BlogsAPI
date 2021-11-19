const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const { User } = require('../models');
const userService = require('../services/userService');

require('dotenv').config();

const SECRET = 'batatinhafrita123';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    await User.create({ displayName, email, password, image });
    const token = jwt.sign({ email }, SECRET, jwtConfig);
    res.status(201).json(token);
  } catch (e) {
    res.status(500).json('Erro ao criar usuário');
  }
};

const getUsers = async (_req, res) => {
  try {
    const result = await User.findAll();

    return res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ e: 'Erro ao listar usuários' });
  }
};

const getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findOne({ where: { id } });

    if (!result) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ message: 'Erro ao listar usuário pelo ID' });
  }
};

const deletePost = rescue(async (request, response) => {
  const { id } = request.params;
  const { id: userId } = request.user;
  const { error } = await userService.removePost(id, userId);
 
  if (error) {
    return response.status(error.status).json({ message: error.message });
  }
 
  response.status(204).json();
 });

module.exports = {
  createUser,
  getUsers,
  getUsersById,
  deletePost,
}; 