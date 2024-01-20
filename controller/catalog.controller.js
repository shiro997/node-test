const UserType = require ('../model/userType');

const getUserTypes = async (req,res) => {
  let tpSh =[];
  UserType.find().then((userTps)=>{
    userTps.forEach(u=>{
      
      tpSh.push(u)
      
    });
    res.json(tpSh);
  });
}

module.exports = getUserTypes;