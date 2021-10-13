const express = require('express');
const { userController } = require('../controller/userController');

const router = express.Router();

router.route('/')
  .post(userController)
  .get();

module.exports = router;
