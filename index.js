const express = require('express');
const user = require('./controller/userController');
const login = require('./controller/loginController');
const categories = require('./controller/categoryController');
const post = require('./controller/blogPostController');
require('dotenv').config();

const app = express();

// const port = process.env.PORT;

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', user);
app.use('/login', login);
app.use('/categories', categories);
app.use('/post', post);
