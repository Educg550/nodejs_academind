const express = require("express");
const app = express();

app.use("/users", (req, res) => {
  console.log(`Now on route ${req.headers.location}`);
  res.sendFile(__dirname + "/views/users.html");
});

app.use("/", (req, res) => {
  console.log(`Now on route ${req.headers.location}`);
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000);
