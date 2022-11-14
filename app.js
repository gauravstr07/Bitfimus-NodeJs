const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("page/home.html", "utf-8", (err, data) => {
      if (err) throw Error;
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("page/about.html", (err, data) => {
      if (err) throw Error;
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`server running on port: ${port}📡`);
});
