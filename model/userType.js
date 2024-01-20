const {model, Schema} = require('mongoose');

const usrTpSchema = new Schema({
  Name: String
});

module.exports = model("UserType", usrTpSchema);