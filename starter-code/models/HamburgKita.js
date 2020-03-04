const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hamburgKitaSchema = new Schema({
  name: String,
  addres: String,
  postcode: Number,
  neighbourhood: String,
  spots: Number
});

const HamburgKita = mongoose.model("Haumburgkita", hamburgKitaSchema);
module.exports = HamburgKita;
