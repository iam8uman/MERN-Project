const mongoose = require("mongoose");
MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL,{
  userNewUrlParser: true,
  useUnifiedTopology: true,
});
