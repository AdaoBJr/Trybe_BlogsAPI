const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const { createUser, loginUser, getAll, getById } = require('./controllers/user_controller');
const { NameValidation,
  PasswordValidation,
  EmailExist,
  EmailValidation, emptyEmail,
  emptyPassword, tokenValidation } = require('./middlewares/user_middleware');

const { createCategories } = require('./controllers/categorie_controller');
const { nameValid } = require('./middlewares/categories_middleware');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', NameValidation, EmailValidation, PasswordValidation, EmailExist, createUser);
app.post('/login', emptyEmail, emptyPassword, loginUser);
app.post('/categories', tokenValidation, nameValid, createCategories);

app.get('/user', tokenValidation, getAll);
app.get('/user/:id', tokenValidation, getById);
