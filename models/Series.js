const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeriesSchema = new Schema(
  {
    apiSeriesId: { type: String },
    name: { type: String },
    description: { type: String },
    rating: { type: String },
    season: { type: Number },
    episode: { type: Number },
    name: { type: String },
    genres: Array,
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Series", SeriesSchema);
