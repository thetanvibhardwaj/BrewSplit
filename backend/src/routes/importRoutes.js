const express = require("express");
const multer = require("multer");

const { importCSV } = require("../controllers/importController");

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post("/", upload.single("file"), importCSV);

module.exports = router;