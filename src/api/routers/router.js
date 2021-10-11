const express = require('express');
const userController = require('../controllers/userController');
const validateUser = require('../middlewares/validateUser');

const router = express.Router();
console.log('router');
router.post('/user',
validateUser,
userController.post);

module.exports = router;
