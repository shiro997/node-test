const config = require('./config.js');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const db = require('./db/database');
const controller = require('./controller');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/user',controller.getUsers);
app.get('/user/:id',controller.getUserById);
app.post('/user',controller.createUser);
app.put('/user',controller.updateUser);
app.delete('/user/:id',controller.deleteUser);
app.post('/login',controller.login);
app.get('/catalog/user-type',controller.getUserTypes);

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
  db();
});

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');

});

