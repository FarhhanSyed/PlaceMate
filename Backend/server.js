const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db.js");
const app = express();
const authRoutes = require("./routes/auth.js");
const quizRoutes = require("./routes/quiz.js");
const resultRoute = require("./routes/result.js");
const data = require("./config/data.js");
const Quiz = require("./models/quiz.js");

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
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
