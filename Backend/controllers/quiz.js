const Quiz = require("../models/quiz.js");

let sendQuiz = async (res, title, label) => {
  try {
    let data = await Quiz.findOne({ title });
    if (!data) {
      return res.status(404).json({ message: `${label} not found` });
    }
    res.status(200).json({
      quiz_id: data._id,
      title: data.title,
      questions: data.questions,
      difficulty: data.difficulty,
    });
  } catch (err) {
    console.error(`Error fetching ${label}:`, err.message);
    res.status(500).json({ message: `Failed to load ${label} data` });
  }
};

exports.aptitude = (req, res) =>
  sendQuiz(res, "Aptitude Quiz", "Aptitude Quiz");
exports.cn = (req, res) =>
  sendQuiz(res, "Computer Networks", "Computer Networks Quiz");
exports.oops = (req, res) => sendQuiz(res, "OOPs Concepts", "OOPs Quiz");
exports.dbms = (req, res) => sendQuiz(res, "DBMS Quiz", "DBMS Quiz");
exports.dsa = (req, res) => sendQuiz(res, "Data Structures", "DSA Quiz");
exports.mt = (req, res) => sendQuiz(res, "Full Mock Test", "Mock Test");
