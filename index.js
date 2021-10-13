const express = require('express');
require('dotenv').config();

const app = express();
const userRoutes = require('./routes/users.route');
const loginRoutes = require('./routes/login.route');
const error = require('./middlewares/error');

app.use(express.json());

const PORT = process.env || 3000;

app.listen(PORT, () => console.log(`ouvindo na porta ${PORT}`));

app.use('/user', userRoutes);
app.use('/login', loginRoutes);
app.use(error);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
