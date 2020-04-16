const express = require("express");
const { body } = require("express-validator");
const app = express();

const seriesController = require("../controllers/series");
const isAuth = require("../middleware/isAuth");

// POST /feed/post
app.post(
  "/add",
  isAuth,
  [
    body(body("apiSeriesId").trim(), "name").trim(),
    body("description").trim(),
    body("rating"),
    body("season"),
    body("episode"),
    body("cName").trim(),
    body("genres"),
    body("creator")
  ],
  seriesController.addSeries
);

module.exports = app;
