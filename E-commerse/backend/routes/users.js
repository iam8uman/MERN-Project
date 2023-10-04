// api for storing userDetails in database

const express = require("express");
const router=express.Router();

//import user model schema
const Users = require("../models/users");

// post route 
router.post("/register", async (req,res)=>{
    const user = new Users(req.body);
    res.send(user);
    // const createUser = await user.save();
    // res.send(createUser);
})

// export routes
module.exports=router;