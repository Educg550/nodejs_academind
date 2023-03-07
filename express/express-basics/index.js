const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("./util/path");

const userRoutes = require("./routes/user");
const profilesRoutes = require("./routes/profiles");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// Useful for serving static files, like CSS, images, etc...
app.use(express.static(path.join(rootDir, "public")));

// Will execute for every path starting with '/'
app.use((req, res, next) => {
  console.log("This always runs!");
  next();
});

app.use(profilesRoutes);
// Shorthand for adding '/user' after every route under userRoutes
app.use("/user", userRoutes);

// Only executes if no route matched before
app.use((req, res) => {
  res.sendFile(path.join(rootDir, "views", "404-status.html"));
});

app.listen(3000);
