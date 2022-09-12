const Author = require("../models/Author.model");
module.exports.authorsController = {
  addAuthor: async (req, res) => {
    const { name, description } = req.body;
    try {
      const author = await Author.create({
        name,
        description,
      });
      res.json(author);
    } catch (e) {
      res.json(e.message);
    }
  },
};
