const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('mongoose-type-email');

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: mongoose.SchemaTypes.Email, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  // favourites: {
    // items: [{ showId: {type: Schema.Types.ObjectId}, required: true}]
  // }
});

module.exports = mongoose.model("User", userSchema);
