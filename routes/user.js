const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

router.get("/add-user", (req, res) => {
  // process.cwd() returns the directory where package.json resides
  res.sendFile(path.join(rootDir, "views", "add-user.html"));
});

router.post("/add-user", (req, res) => {
  console.log(req.body.username);
  res.redirect("/");
});

module.exports = router;
