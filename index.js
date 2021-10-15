const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./src/routes/userRouter');
const error = require('./src/middlewares/error');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

userRoutes(app);

app.use(error);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
