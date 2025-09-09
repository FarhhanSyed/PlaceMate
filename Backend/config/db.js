const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURL = process.env.MONGOURL;
  await mongoose.connect(mongoURL);
};

module.exports = connectDB;
