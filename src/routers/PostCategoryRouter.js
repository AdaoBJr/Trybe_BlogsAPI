const express = require('express');
const { newCategory, getCategories } = require('../controllers/PostCategoryController');
const JWTValidator = require('../validators/JWTValidator');

const router = express.Router();

router.route('/')
  .post(
    JWTValidator,
    newCategory,
  )
  .get(
    JWTValidator,
    getCategories,
  );

module.exports = router;
