const Genre = require("../models/Genre.model");

module.exports.genresController = {
  addGenres: async (req, res) => {
    const { name, description } = req.body;
    try {
      const book = await Genre.create({
        name,
        description,
      });
      res.json(book);
    } catch (e) {
      res.json(e.message);
    }
  },
  deleteGenres: async (req, res) => {
    try {
      const book = await Genre.deleteOne();
      res.json(book);
    } catch (e) {
      res.json(e.message);
    }
  },
  getAllGenres: async (req, res) => {
    try {
      const book = await Genre.find();
      res.json(book);
    } catch (e) {
      res.json(e.message);
    }
  },
};
