const express = require("express");
const path = require("path");
const app = express();

const mainRoute = require("./routes/index");
const usersRoute = require("./routes/users");

app.use(express.static(path.join(process.cwd(), "public")));

app.use(mainRoute);
app.use(usersRoute);

app.listen(3000);
