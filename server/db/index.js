
var mongoose = require("mongoose");
var mongoUri = "mongodb+srv://car:store@cluster0.exqumbj.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUri, () => {
  console.log("Database connected");
});
var db = mongoose.connect(mongoUri);

module.exports = db;