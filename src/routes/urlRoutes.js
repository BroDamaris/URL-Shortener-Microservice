const express = require("express");
const { shortenUrl } = require("../controllers/urlController");
const router = express.Router();

// Route untuk mempersingkat URL
router.post("/shorten", shortenUrl);

module.exports = router;
