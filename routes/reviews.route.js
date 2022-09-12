const { Router } = require("express");
const router = Router();
const { reviewsController } = require("../controllers/reviews.controller");

router.post("/review/book/:id", reviewsController.addReviewBook);
router.delete("/review", reviewsController.deleteReview);
router.get("/review/book/:id", reviewsController.getAllReviewBooks);

module.exports = router