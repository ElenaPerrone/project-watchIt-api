const express = require("express");
const app = express();
const User = require("../models/User");
// const mongoose = require("mongoose");

app.get("/", (req, res) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => {
      res.status(500).json({ message: "err" });
    });
});

app.post("/add", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

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

module.exports = app;
