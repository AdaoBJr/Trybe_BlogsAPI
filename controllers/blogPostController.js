const express = require('express');

const router = express.Router();

const validate = require('../validations/validateBlogPost');
const auth = require('../validations/validateToken');
const blogPostService = require('../services/blogPost');

router.post('/post',
validate.validateTitle,
validate.validateContent,
validate.validateCategoryId,
validate.validateIfCategoryIdExist,
auth.verifyToken,
async (req, res) => {
    const { title, content } = req.body;
    const { id } = req.user;

    const addPost = await blogPostService.addNewPost(id, title, content);

    return res.status(201).json(addPost);
});

router.get('/post',
auth.verifyToken,
async (req, res) => {
    const posts = await blogPostService.getAllPosts();

    return res.status(200).json(posts);
});

module.exports = router;
