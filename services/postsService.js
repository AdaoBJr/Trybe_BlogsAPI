const { BlogPost, Category } = require('../models');

const emptyFields = (field) => {
  if (field) {
  const err = { name: 'emptyError',
  message: `"${field}" is required` };
  throw err;
  }
  return false;
};

const invalidCategory = async (categoryArray) => {
  const category = categoryArray.map((id) => Category.findOne({ where: { id } }));
  const results = await Promise.all(category);
  const someInvalidCategory = results.some((result) => !result);
  return someInvalidCategory;
};

const createNewPost = async (title, content, userId) => {
  const post = await BlogPost.create({ title, content, userId });
  const { id } = post;
  return id;
};

module.exports = { createNewPost, emptyFields, invalidCategory };
