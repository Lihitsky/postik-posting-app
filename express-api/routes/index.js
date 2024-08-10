const express = require("express");
const router = express.Router();
const multer = require("multer");

const uploadDestination = "uploads";

// Showing where to store the data
const storage = multer.diskStorage({
  destination: uploadDestination,
  filename: function (req, file, next) {
    next(null, file.originalname);
  },
});

const uploads = multer({ storage: storage });

module.exports = router;
