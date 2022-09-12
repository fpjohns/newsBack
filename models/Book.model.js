const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  author: {
    ref: "Author",
    type: mongoose.Schema.Types.ObjectId,
    default: null,
  },
  genre: {
    ref: "Genre",
    type: mongoose.Schema.Types.ObjectId,
    default: null,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
