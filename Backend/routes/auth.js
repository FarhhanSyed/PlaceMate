const express = require("express");
const authController = require("../controllers/auth.js");
const { authenticateUser } = require("../middleware/auth.js");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("login", authController.login);
router.post("logout", authController.logout);

router.get("/me", authenticateUser, (req, res) => {
  res.status(200).json({ message: "Authenticated", user: req.user });
});

module.exports = router;
