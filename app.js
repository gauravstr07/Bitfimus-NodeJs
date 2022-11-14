const http = require("http");

const Circle = require("./circle");
const circle = new Circle();
console.log(circle.area(10));
console.log(circle.circumference(10));

const port = 5000;

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(
//     JSON.stringify({
//       data: "Hello NodeJs",
//     })
//   );
// });

// server.listen(port, () => {
//   console.log(`server running on port: ${port}📡`);
// });
