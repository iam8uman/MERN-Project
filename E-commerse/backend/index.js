const express = require("express");
const app = express();

require("./models/config");
const Users = require("./models/users");

//middleware
app.use(express.json());

// get all the details of register users
app.get("/register", async (req, res) => {
  const users = await Users.find();
  res.send(users);
});

// post api for register users
app.post("/register", async (req, res) => {
  const user = new Users(req.body);
  const createUser = await user.save();
  res.send(createUser);
});

//put api for update the register users
app.put("/register/:id", async (req, res) => {
  const user = await Users.findById(req.params.id);
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  const updateUser = await user.save();
  res.send(updateUser);
});

//delete api for delete the register users
app.delete('/register/:id',async(req,res)=>{
  try{
    // delete User by id 
    
    const deleteUser = await Users.findByIdAndRemove(req.params.id);
    res.send(deteteUser);
  }
  catch(error){
    res.status(404).send({error:"user not found"})
  }
})


const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server listening the to the PORT=${PORT}`);
});
