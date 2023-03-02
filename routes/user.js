const express = require("express");

const router = express.Router();

router.get("/add-user", (req, res) => {
  // process.cwd() returns the directory where package.json resides
  res.sendFile(process.cwd() + "/views/add-user.html");
});

router.post("/add-user", (req, res) => {
  console.log(req.body.username);
  res.redirect("/");
});

module.exports = router;
