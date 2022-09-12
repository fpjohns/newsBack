const Book = require("../models/Book.model");

module.exports.booksController = {
  addBook: async (req, res) => {
    const { name, author, genre } = req.body;
    try {
      const book = await Book.create({
        name,
        author,
        genre,
      });
      res.json(book);
    } catch (e) {
      res.json(e.message);
    }
  },
  deleteBook: async (req, res) => {
    try {
      const book = await Book.deleteOne();
      res.json(book);
    } catch (e) {
      res.json(e.message);
    }
  },
  changeBook: async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id);
      res.json(book);
    } catch (e) {
      res.json(e.message);
    }
  },
  getBookId: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.json(book);
    } catch (e) {
      res.json(e.message);
    }
  },
  getAllBook: async (req, res) => {
    try {
      const book = await Book.find().populate("author genre", "name")
      res.json(book);
    } catch (e) {
      res.json(e.message);
    }
  },
  getGenreBook: async (req, res) => {
    try {
      const book = await Book.find(req.params.id);
      res.json(book);
    } catch (e) {
      res.json(e.message);
    }
  },
};
