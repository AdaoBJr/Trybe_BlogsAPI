const express = require('express');
const userRouter = require('./routes/userRouter');

const app = express();

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.use(express.json());

app.use('/user', userRouter);

// app.use(middleErro);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
