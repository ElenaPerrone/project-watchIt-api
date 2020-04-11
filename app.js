const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const User = require("./models/User");

mongoose
  .connect(
    "mongodb+srv://Elena:4xrCMjCWxs1AZHXe@cluster0-hcg5t.mongodb.net/serialwatcher?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((result) => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log("Not connected to mongoDB", err);
  });

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", require("./routes/user"));



module.exports = app;
