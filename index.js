require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const { checkEmailExists, 
  checkPassword, checkName, checkEmail, createUser } = require('./services/user.js');
  // testeEmptyPassword, validaToken, getAllUsers, getUser, testeEmptyEmail, userLogin, } = require('./services/user.js');

// const { verifyCategory,
//   createCategory, getAllCategories } = require('./services/categories.js');

// const { verifyCategoryId, verifyContent,
//   verifyTitle, verifyCategoryIdExists, 
//   createBlogPost, getAllPosts } = require('./services/post.js');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', checkEmail, checkEmailExists, checkPassword, checkName, createUser);
// app.post('/login', testeEmptyEmail, testeEmptyPassword, userLogin);
// app.post('/categories', validaToken, verifyCategory, createCategory);
// app.post('/post', validaToken, verifyCategoryId, verifyContent, verifyTitle,
//   verifyCategoryIdExists, createBlogPost);

// app.get('/user', validaToken, getAllUsers);
// app.get('/user/:id', validaToken, getUser);
// app.get('/categories', validaToken, getAllCategories);
// app.get('/post', validaToken, getAllPosts);

app.listen(3000, () => console.log('ouvindo porta 3000!'));