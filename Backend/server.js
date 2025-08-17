if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db.js");
const app = express();
const authRoutes = require("./routes/auth.js");
const quizRoutes = require("./routes/quiz.js");
const resultRoute = require("./routes/result.js");

// connectDB().then(async () => {
//   const quizCount = await Quiz.countDocuments();
//   if (quizCount === 0) {
//     const ddd = Object.values(data);
//     await Quiz.insertMany(ddd);
//     console.log("Quiz data inserted to Atlas!");
//   }
// });

app.use(
  cors({
    origin: process.env.CLIENT_URL,
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

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
