const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());



// register api
const userRouter = require("./routes/users");
app.use("/users", userRouter);

// get api 
const userDetails = require("./routes/userDetails");
app.use("/users", userDetails)

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server listening the to the PORT=${PORT}`);
});
