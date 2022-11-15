const express = require("express");
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const connectDB = require("./database/db");

const app = express();
const port = 5000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "pug");
app.use(routes);

connectDB()
  .then(() => {
    console.log("Connection successfull to database💾");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`server running on port: ${port}📡`);
});
