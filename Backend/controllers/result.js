const Result = require("../models/result.js");

exports.saveResult = async (req, res) => {
  // console.log(req.body);
  try {
    let result = new Result({
      user: req.user._id,
      quiz: req.body.quiz_id,
      score: req.body.score,
      responses: req.body.responses,
    });
    await result.save();
    // console.log(result);
    res.status(201).json({ message: "Result saved successfully" });
  } catch (err) {
    console.error("Error saving results : ", err);
    res.status(500).json({ message: "Error saving result" });
  }
};
