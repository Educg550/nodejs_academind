const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  // process.cwd() returns the directory where package.json resides
  res.sendFile(process.cwd() + "/views/index.html");
});

module.exports = router;
