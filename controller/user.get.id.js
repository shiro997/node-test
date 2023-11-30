const Usuario = require ('../model/user');

const getUserById = async (req,res) => {
  const {id} = req.params;

  if(id.length === 24){
    Usuario.findById(id).then((usr)=>{
      if(!usr){
        return res.json({msj:'No existe el susuario solicitado'});
      }else{
        const{_id, __v, Password, ...resto} = usr._doc;
        res.json(resto);
      }
    });
  }else{
    res.json({msj:'El Identificador ingresado es inválido'});
  }
}

module.exports = getUserById;