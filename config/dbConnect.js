const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connected Succesfully"))
    .catch((error) => {
      console.log("Connection Failed");
      console.log(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
