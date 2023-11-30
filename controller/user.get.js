const Usuario = require ('../model/user');

const getUsers = async (req,res) => {
  let usrSh =[];
  Usuario.find().then((users)=>{
    users.forEach(u=>{
      let {__v, Password, ...resto} = u._doc;
      usrSh.push(resto)
    });
    
    res.json(usrSh);
  });
}

module.exports = getUsers;