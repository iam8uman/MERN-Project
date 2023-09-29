// const express = require("express");
// const routes = express.Router();

// require("./dB/config");
// const Users = require("./dB/users");

// //routing for view all the details of register users
// routes.get("/register", async (req, res) => {
//   const users = await Users.find();
//   res.send(users);
// });

// routes.post("/register", async (req, res) => {
//   const user = new Users(req.body);
//   const createUser = await user.save();
//   res.send(createUser);
// });

// module.exports = routes;
