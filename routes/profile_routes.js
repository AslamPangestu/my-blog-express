const express = require("express");
const multer = require("multer");

const router = express.Router();
const multipart = multer();
const { getData, update } = require("../controllers/ProfileControllers");

router.get("/", getData);
router.post("/", multipart.any(), update);

module.exports = router;
