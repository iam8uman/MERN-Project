// api for storing userDetails in database

const express = require("express");
const router=express.Router();

//import user model schema
const Users = require("../models/users");

// post route 
router.get("/details", async (req,res)=>{
   //fetch data from database and show here 
   const userDetails = await Users.find();
   res.send(userDetails)
})

// export routes
module.exports=router;