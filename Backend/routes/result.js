const express = require("express");
const resultController = require("../controllers/result.js");
const authenticateUser = require("../middleware/auth.js");
const router = express.Router();

router.post("/results", authenticateUser, resultController.saveResult);

module.exports = router;
