// api for storing userDetails in database

const express = require("express");
const  router=express.Router();
require("../db/config")

//import user model schema
const Users = require("../models/users");

// post route 
router.post("/register", async (req,res)=>{
        const user = new Users(req.body);
        const result = await user.save();
        res.send(result)
})

// export routes
module.exports=router;