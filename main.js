const EventEmitter = require("events");
const express = require("express");

const myEmitter = new EventEmitter();

myEmitter.on("test-event", (data) => {
  console.log(data);
});

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  myEmitter.emit("test-event", { name: "Gaurav" });
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`server running on port: ${port}📡`);
});
