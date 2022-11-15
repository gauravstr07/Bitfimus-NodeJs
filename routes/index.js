const express = require("express");
const bookRouter = require("./book");
const path = require("path");
const router = express.Router();

router.use("/book", bookRouter);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/../page/home.html"), { name: "Gaurav" });
});

router.all("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../page/404.html"));
});

module.exports = router;
