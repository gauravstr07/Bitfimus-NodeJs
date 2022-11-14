const http = require("http");

const port = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello NodeJs",
    })
  );
});

server.listen(port, () => {
  console.log(`server running on port: ${port}📡`);
});
