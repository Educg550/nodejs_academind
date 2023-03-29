const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
// Contains info about saved products in fake database (NOT SAFE)
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // This will use the defined template engine in `index.js` and will look automatically for the "shop.pug"/"shop.hbs" file
  // The second argument is passed to the template handler
  res.render("shop", {
    products: adminData.products,
    docTitle: "Product Shop",
  });
});

module.exports = router;
