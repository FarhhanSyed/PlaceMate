const mongoose = require("mongoose");
const schema = mongoose.Schema;
const User = require("./user.js");
const Quiz = require("./quiz.js");

const resultSchema = new schema({
  user: {
    type: schema.Types.ObjectId,
    ref: "User",
  },
  quiz: {
    type: schema.Types.ObjectId,
    ref: "Quiz",
  },
  score: {
    type: Number,
    required: true,
  },
  responses: [Number],
  takenAt: {
    type: Date,
    default: Date.now,
  },
});

const Result = mongoose.model("Result", resultSchema);
module.exports = Result;
