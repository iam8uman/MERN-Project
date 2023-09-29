const express = require("express");
const app = express();

// require("./dB/config");
const Users = require("./dB/users");

//middleware
app.use(express.json());

app.post("/register", async (req, res) => {
  let user = new Users(req.body);
  let result = await user.save();
  res.send(result);
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server listening the to the PORT=${PORT}`);
});
