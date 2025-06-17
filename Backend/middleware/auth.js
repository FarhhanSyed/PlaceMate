const User = require("../models/user");
const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json({ message: "Not authorized" });
  }
  try {
    const decoded = jwt.verify(token, "jwtSecret");
    const user = await User.findById(decoded.userId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired" });
    } else if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Token is not valid" });
    } else {
      return res.status(500).json({ message: "Server error" });
    }
  }
};

module.exports = authenticateUser;
