const express = require("express");
const quizController = require("../controllers/quiz.js");
const router = express.Router();

router.get("/aptitude", quizController.aptitude);
router.get("/cn", quizController.cn);
router.get("/dbms", quizController.dbms);
router.get("/oops", quizController.oops);
router.get("/dsa", quizController.dsa);
router.get("/mt", quizController.mt);

module.exports = router;
