const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURL = process.env.MONGO_URL;
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