const express = require("express");
const routes = require("./routes/index");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "pug");
app.use(routes);

app.listen(port, () => {
  console.log(`server running on port: ${port}📡`);
});
