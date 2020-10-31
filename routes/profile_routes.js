const express = require("express");
const fileUpload = require("../middleware/fileUpload");

const router = express.Router();
const { getData, update } = require("../controllers/ProfileControllers");

const fields = [
  { name: "profileImageUrl", maxCount: 1 },
  { name: "educationImages" },
  { name: "contactImages" },
];

router.get("/", getData);
router.post("/", fileUpload.fields(fields), update);

module.exports = router;
