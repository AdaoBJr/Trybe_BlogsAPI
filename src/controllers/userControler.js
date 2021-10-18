const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/UserService');

const postNewUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const { token } = req;
    const payload = { displayName, email, password, image };

    const newUser = await UserService.newUser(payload);
    
    if (newUser.error) {
      return res.status(StatusCodes.CONFLICT).json({ message: newUser.error.message });
    }
    
    return res.status(StatusCodes.CREATED).json({ token });
  } catch (e) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro tente mais tarde' });
  }
};

const getAll = async (req, res) => {
  try {
    const users = await UserService.getAll();
    return res.status(StatusCodes.OK).json(users);
  } catch (e) {
    console.log(e);
  }
};

const getById = async (req, res) => {
  try {
    const user = await UserService.getById(req.params);
    if (user.error) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: user.error.message });
    }

    return res.status(StatusCodes.OK).json(user);
  } catch (e) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: e.message });
  }
};

module.exports = { postNewUser, getAll, getById };
