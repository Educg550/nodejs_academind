const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => {
  // process.cwd() returns the directory where package.json resides
  res.sendFile(path.join(process.cwd(), "views", "index.html"));
});

module.exports = router;
