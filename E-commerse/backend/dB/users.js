const mongoose = require("mongoose");
  
const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  pass: String,
});

const users = mongoose.model("users", usersSchema);

module.exports = users;
