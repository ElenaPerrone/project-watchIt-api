const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, default: "", required: true },
  lastName: { type: String, default: "", required: true },
  email: { type: String, default: "", required: true },
  password: { type: String, default: "", required: true },

  status: {
    type: String,
    default: "New user!",
  },
  // favourites: [
  // {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Post'
  // }
  // ]
});

module.exports = mongoose.model("User", UserSchema);
