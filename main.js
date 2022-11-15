const express = require("express");
const routes = require("./routes/index");

const app = express();
const port = 5000;

app.set("view engine", "pug");
app.use(routes);

app.listen(port, () => {
  console.log(`server running on port: ${port}📡`);
});
