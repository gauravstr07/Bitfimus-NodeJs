const express = require("express");
const bookRouter = express.Router();
const connect = require("../database/db");

bookRouter
  .route("/")
  .get(async (req, res) => {
    const db = await connect();
    const books = await db.collection("book").find().toArray();
    res.json(books);
  })
  .post(async (req, res) => {
    const db = await connect();

    await db.collection("book").insertOne(req.body);
    res.json(req.body);
  });

bookRouter
  .route("/:id")
  .get((req, res) => {
    res.send(`single book of id: ${req.params.id}`);
  })
  .patch((req, res) => {
    res.send(`update book: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delted book: ${req.params.id}`);
  });

module.exports = bookRouter;
