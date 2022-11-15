// const connect = require("../database/db");
const { ObjectId } = require("mongodb");
const Book = require("../models/Book");

exports.index = async (req, res) => {
  const books = await Book.find();
  res.status(200).json(books);
};

exports.store = async (req, res) => {
  try {
    const addBook = await Book.create(req.body);
    res.status(201).send(addBook);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.show = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const book = await Book.find({ _id });
  res.status(200).send(book);
};

exports.update = async (req, res) => {
  const _id = ObjectId(req.params.id);
  await Book.updateOne({ _id }, { $set: req.body });
  res.json({ data: "Book is updated" });
};

exports.delete = async (req, res) => {
  const _id = ObjectId(req.params.id);
  await Book.deleteOne({ _id });
  res.status(204).json();
};
