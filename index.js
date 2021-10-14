const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./routes/userRoute');
const loginRouter = require('./routes/loginRoute');
const categoriesRouter = require('./routes/categoriesRoute');
const postsRouter = require('./routes/postsRoute');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postsRouter);
