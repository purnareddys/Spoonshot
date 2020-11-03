const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create a schema

const bookSchema = new Schema({
  title: String,
  id: String,
  image: String,
  subtitle: String,
  author: String,
});

//create the model

const bookModel = mongoose.model("Book", bookSchema);
//export the model

module.exports = bookModel;
