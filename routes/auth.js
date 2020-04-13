const express = require("express");
const { body } = require("express-validator");
const app = express();

const User = require("../models/User");
const authController = require("../controllers/auth");

app.post(
  "/signup",
  [
    body("firstName").trim().not().isEmpty(),
    body("lastName").trim().not().isEmpty(),
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("E-Mail address already exists!");
          }
        });
      })
      .normalizeEmail(),
    body("password").trim().isLength({ min: 5 }),
  ],
  authController.signup
);

app.post("/login", authController.login);

module.exports = app;

// localStorage.getItem("token:")