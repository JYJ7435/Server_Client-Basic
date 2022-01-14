const express = require("express");
const app = express();
const port = 5000; //port설정
const config = require("./config/key");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//몽고 DB 연결
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//Localhost:5000 화면 테스트
app.get("/", (req, res) => {
  res.send("Hello World! 안녕하세요 test");
});

app.use("/api/users", require("./routes/users"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
