const fs = require("fs");
const path = require("path");

const { validationResult } = require("express-validator");

const Series = require("../models/Series");
const User = require("../models/User");

exports.addSeries = (req, res, next) => {
  console.log("exports.addSeries -> req", req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed, entered data is incorrect.');
    error.statusCode = 422;
    throw error;
  }

  const apiSeriesId = req.body.id;
  const name = req.body.name;
  const description = req.body.description;
  const rating = req.body.rating;
  const season = req.body.season;
  const episode = req.body.episode;
  const cName = req.body.name;
  const genres = req.body.genres;

  let creator;
  const series = new Series({
    apiSeriesId: apiSeriesId,
    name: name,
    description,
    rating: rating,
    season: season,
    episode: episode,
    cName: cName,
    genres: genres,
    creator: req.userId
  });
  series
    .save()
    .then((result) => {
      return User.findById(req.userId);
    })
    .then((user) => {
    console.log("exports.addSeries -> user", user)
      creator = user;
      user.series.push(series);
      return user.save();
    })
    .then((result) => {
      res.status(201).json({
        message: "Post created successfully!",
        series: series,
        creator: { _id: creator._id, name: creator.name },
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
