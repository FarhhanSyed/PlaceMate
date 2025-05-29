const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const app = express();

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/api/test", (req, res) => {
  res.json({ message: "Cors is working for placemate" });
  res.send("Hello");
});

let port = 8080;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
