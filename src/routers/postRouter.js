const express = require('express');
const rescue = require('express-rescue');
const postController = require('../controllers/postController');

const tokenValidation = require('../middlewares/tokenValidation');
const postValidation = require('../middlewares/postValidation');

const postRouter = express.Router();

postRouter.post('/', tokenValidation, postValidation, rescue(postController.createPost));
postRouter.get('/', tokenValidation, rescue(postController.getPosts));
postRouter.get('/:id', tokenValidation, rescue(postController.getPostById));

module.exports = postRouter;
