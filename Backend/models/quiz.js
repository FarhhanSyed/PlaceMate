const mongoose = require("mongoose");
const schema = mongoose.Schema;

const questionSchema = new schema({
  question: {
    type: String,
    required: true,
  },
  options: [
    {
      type: String,
      required: true,
    },
  ],
  correctAnswerIndex: {
    type: Number,
    required: true,
  },
});

const quizSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    default: "medium",
  },
  questions: [questionSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);
module.exports = Quiz;
