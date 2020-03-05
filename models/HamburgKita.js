const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hamburgKitaSchema = new Schema({
  name: String,
  addres: String,
  postcode: Number,
  district: String,
  neighbourhood: String,
  phoneNumber: Number,
  email: String,
  spots: Number
});

const HamburgKita = mongoose.model("Haumburgkita", hamburgKitaSchema);
module.exports = HamburgKita;
