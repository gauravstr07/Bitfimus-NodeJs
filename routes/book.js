const express = require("express");
const bookRouter = express.Router();

bookRouter
  .route("/")
  .get((req, res) => {
    res.send("All Books");
  })
  .post((req, res) => {
    res.json({ data: "book is created" });
  });

bookRouter.get("/:id", (req, res) => {
  res.send(`single book of id: ${req.params.id}`);
});

module.exports = bookRouter;
