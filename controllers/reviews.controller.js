const Review = require("../models/Review.model");

module.exports.reviewsController = {
  addReviewBook: async (req, res) => {
    try {
      const review = await Review.create(req.params.id);
      res.json(review);
    } catch (e) {
      res.json(e.message);
    }
  },
  deleteReview: async (req, res) => {
    try {
      const review = await Review.deleteOne();
      res.json(review);
    } catch (e) {
      res.json(e.message);
    }
  },
  getAllReviewBooks: async (req, res) => {
    try {
      const review = await Review.find(req.params.id);
      res.json(review);
    } catch (e) {
      res.json(e.message);
    }
  },
};
