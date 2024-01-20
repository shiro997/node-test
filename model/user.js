const {model, Schema} = require('mongoose');

const usrSchema = new Schema({
  Name: String,
  UsrName:String,
  Email: String,
  Age: Number,
  ProfilePhoto:String,
  Password: String,
  UserType: String,
  Clients:[],
  Providers:[],
  Engineers:[],
  Provider:String,
  Supports:[],
});

module.exports = model("Usuario", usrSchema);