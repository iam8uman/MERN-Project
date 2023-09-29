const express = require("express");
const app = express();

require("./dB/config");
const Users = require("./dB/users");

//middleware
app.use(express.json());

//register API
app.post("/register", async (req, res) => {
  const data=req.body;
  // store that data to db
  const user=new Users(data);
  res.send(user);
});

app.get("/register",async (req,res)=>{
  // res.send("Register API using GET method");
  // access database data using find() method
  const users=await Users.find();
  res.send(users);

})

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server listening the to the PORT=${PORT}`);
});
