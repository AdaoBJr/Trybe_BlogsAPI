const express = require('express');
const bodyParser = require('body-parser');

const login = require('./routes/loginRouter');
const user = require('./routes/userRouter');
const categorie = require('./routes/categorieRouter');
const post = require('./routes/postRouter');

const app = express();
app.use(bodyParser.json());

// const usersController = require('./controller/usersController');

app.use('/user', user);
app.use('/login', login);
app.use('/categories', categorie);
app.use('/post', post);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
