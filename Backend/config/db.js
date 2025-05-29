const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURL = "mongodb://127.0.0.1:27017/placemate";
  await mongoose.connect(mongoURL);
};

connectDB()
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });

module.exports=connectDB;