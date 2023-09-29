const mongoose = require("mongoose");
require('dotenv').config(); 


//connect to db
const connectDB= async()=>{
  console.log(URL)
  try{
    await mongoose.connect(process.env.MONGO_URL,{
      useUnifiedTopology: true,
    })
    console.log("Connected to the db");
  }catch(err){
    console.log(`ERROOR:`+ err);
  }
};

connectDB();

