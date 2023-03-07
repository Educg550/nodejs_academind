const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res) => {
  // process.cwd() returns the directory where package.json resides
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

module.exports = router;
