const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require ('../model/user');
const config = require('../config');

const secret = config.SECRET;

const login = async (req,res) => {
  const {Email,Password} = req.body;

  let token;

  Usuario.findOne({Email}).then((usr)=>{
    if(!usr){
      return res.json({msj:'Usuario no encontrado!'});
    }
    else{
      bcrypt.compare(Password,usr.Password).then((isMatch)=>{
        if(isMatch){
          const {Name,Email,Age} = usr;

          token = jwt.sign({
            Name, Email,exp: Date.now()+ 300*1000
          },secret)

          res.json({
            msj:'Usuario logeado correctamente',
            User:{
              Name,Email,Age
            },
            Token: token
          });
        }else{
          res.json({msj:'Contraseña incorrecta!'});
        }
        
      });

    }
  })
}

module.exports = login;