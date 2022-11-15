const express = require("express");
const bookRouter = require("./book");
const router = express.Router();

router.use("/book", bookRouter);

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.all("/*", (req, res) => {
  res.send("page not found");
});

module.exports = router;
