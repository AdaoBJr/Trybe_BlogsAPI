require('dotenv');

const express = require('express');
const bodyParser = require('body-parser');

const {
  verifyEmail, verifyName, verifyPassword, userAlreadyExists,
  createUser, loginUp } = require('./services/user');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', verifyEmail, userAlreadyExists, verifyPassword, verifyName,
 createUser);
app.post('/login', verifyEmail, verifyPassword, loginUp);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
