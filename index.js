const express = require('express');

const app = express();

app.use(express.json());

const userRouter = require('./routers/userRouter');

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.user('/user', userRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
