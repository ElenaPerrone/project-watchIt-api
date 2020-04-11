const express = require("express");
const app = express();
const User = require("../models/User");

app.get("/", (req, res) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => {
      res.status(500).json({ message: "err" });
    });
});

app.post("/add", (req, res) => {
  const { firstName, lastName, email, username, password } = req.body
  // const firstName = req.body.firstName;
  // const lastName = req.body.lastName;
  // const email = req.body.email;
  // const username = req.body.username;
  // const password = req.body.password;

  const newUser = new User({
    firstName,
    lastName,
    email,
    username,
    password,
  });

  newUser
    .save()
    .then(() => {
      console.log("result", newUser);
      res.status(201).json("user added");
    })
    .catch((err) => {
      console.log("err", err);
      res,
        status(500).json({
          error: err,
        });
    });
});
app.get("/login", (req, res) => {
  // const { username, password } = req.body
  console.log("req.body", req.body)
  
  // if ({ username: username} && {password: password }) {
    User.find({})
      .then((users) => res.status(200).json(users))
      console.log("users", users)
      .catch((err) => {
        res.status(500).json({ message: "err" });
      });
  // }
});
module.exports = app;
