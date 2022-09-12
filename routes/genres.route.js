const { Router } = require("express");
const { genresController } = require("../controllers/genres.controller");
const router = Router();

router.post("/genre", genresController.addGenres);
router.delete("/genre", genresController.deleteGenres);
router.get("/genre", genresController.getAllGenres);

module.exports = router;
