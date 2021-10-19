const express = require('express');
require('dotenv').config();

const usersRoutes = require('./routers/userRoutes');
const loginRoutes = require('./routers/loginRoutes');

// const { PORT } = process.env;

//
const app = express();
app.use(express.json());

app.use('/user', usersRoutes);
app.use('/login', loginRoutes);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(process.env.PORT || 3000, () => console.log(`ouvindo porta ${PORT}`));