const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
  link: String
});

module.exports = mongoose.model("Product", productSchema);
