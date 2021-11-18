const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user');
const loginRouter = require('./routes/login');
const categoryRouter = require('./routes/category');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use(userRouter);
app.use(loginRouter);
app.use(categoryRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});