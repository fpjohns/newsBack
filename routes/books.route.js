const { Router } = require("express");
const router = Router();
const { booksController } = require("../controllers/books.controller");

router.post("/book", booksController.addBook);
router.delete("/book", booksController.deleteBook);
router.patch("/book", booksController.changeBook);
router.get("/book/:id", booksController.getBookId);
router.get("/book", booksController.getAllBook);
router.get("/book/genre/:id", booksController.getGenreBook);

module.exports = router;
