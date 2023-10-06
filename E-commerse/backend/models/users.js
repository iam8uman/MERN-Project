const mongoose = require("mongoose");

//define schema
const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  pass: String,
});

// create model
const users = mongoose.model("users", usersSchema);

module.exports = users;
