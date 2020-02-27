/* We'll write the schema and register our model for the users here */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["parent", "government", "owner"]
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
