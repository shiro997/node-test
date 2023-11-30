const {model, Schema} = require('mongoose');

const usrSchema = new Schema({
  Name: String,
  Email: String,
  Age: Number,
  Password: String
});

module.exports = model("Usuario", usrSchema);