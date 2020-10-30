const express = require("express");
const router = express.Router();
const {
  create,
  remove,
  getAll,
  getOne,
  update,
} = require("../controllers/ArticleControllers");

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.delete("/:id", remove);
router.patch("/:id", update);

module.exports = router;
