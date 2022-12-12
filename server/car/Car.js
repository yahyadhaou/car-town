var mongoose = require("mongoose");
const db = require("../db/index.js");
mongoose.Promise = global.Promise;

var car = mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  price: Number,
  nmr : Number,
  userId: String,
});

var car = mongoose.model("car", car);

module.exports = car;
