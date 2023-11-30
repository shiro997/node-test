const bcrypt = require('bcrypt');
const Usuario = require ('../model/user')

const createUser = async (req,res) => {
  const {Name, Email, Age, Password} = req.body;

  Usuario.findOne({Email}).then((u)=>{
    if(u){
      return res.json({msj:'ya existe un usuario con ese E-mail!!'});
    }else if(!u){
      bcrypt.hash(Password,10,(error,passhashed)=>{
        if(error) res.json(error);
        else{
          let newUser = new Usuario ({
            Name,
            Email,
            Age,
            Password: passhashed
          })

          newUser.save().then((usr)=>{
            res.json(usr);
          }).catch(error=>res.json(error));
        }
      });
    }
  });
}

module.exports= createUser;