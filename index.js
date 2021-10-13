const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/users');
const {
  validateDisplayName,
  validateEmail,
  validatePassword } = require('./middlewares/validateNewUser');

const app = express();

app.use(bodyParser.json());
app.use('/user', validateDisplayName, validateEmail, validatePassword, userController);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
