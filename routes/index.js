const express = require("express");
const bookRouter = require("./book");
const path = require("path");
const router = express.Router();

router.use("/book", bookRouter);

router.get("/", (req, res) => {
  res.render("index", { name: "Gaurav" });
});

router.all("/*", (req, res) => {
  res.render("404", { error: "Page Not Found🤔" });
});

module.exports = router;
