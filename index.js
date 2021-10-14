const express = require('express');
require('dotenv').config();
const userController = require('./controllers/userController');

const app = express();

app.use(express.json());

app.use('/user', userController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
