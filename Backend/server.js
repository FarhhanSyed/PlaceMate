const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db.js");
const app = express();
const authRoutes = require("./routes/auth.js");
const quizRoutes = require("./routes/quiz.js");
const resultRoute = require("./routes/result.js");

dotenv.config();
connectDB()
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });

app.use(
  cors({
    origin: "http://localhost:5713",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/quizzes/startquiz", quizRoutes);
app.use("/api/quizzes", resultRoute);

app.get("/api/test", (req, res) => {
  res.json({ message: "Cors is working for placemate" });
  res.send("Hello");
});

let port = 8080;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
