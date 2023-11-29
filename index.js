const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(cors());
app.use(helmet());


//Shiro997-Yggdrasil
//kS8nCrUM8L3kMnFB
//mongodb+srv://Shiro997-Yggdrasil:kS8nCrUM8L3kMnFB@cluster0.eabutku.mongodb.net/
mongoose.connect('mongodb+srv://Shiro997-Yggdrasil:kS8nCrUM8L3kMnFB@cluster0.eabutku.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const usrSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  edad: Number,
  password: String
});

const Usuario = mongoose.model('Usuario', usrSchema);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');

});

app.post('/createUser', async(req,res)=>{
  const nuevoUsuario = req.body;
  const usuarioGuardado = await Usuario.create(nuevoUsuario);
  res.json(usuarioGuardado);
});

app.get('/users', async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

