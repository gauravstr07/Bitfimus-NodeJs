const http = require("http");
const fs = require("fs");


const port = 5000;

const func1 = () => {
  console.log("func1");
};

const func2 = () => {
  console.log("func2");
};

const func3 = () => {
  console.log("func3");

  process.nextTick(() => {
    console.log("i am next");
  });

  

  setTimeout(() => {
    func1();
  }, 1000);

  new Promise((resolve, reject) => {
    resolve("I am a promise");
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  func2();
};

func3();

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("page/home.html", "utf-8", (err, data) => {
      if (err) throw Error;
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("page/about.html", "utf-8", (err, data) => {
      if (err) throw Error;
      res.write(data);
      res.end();
    });
  } else if (req.url === "/create-file") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const data = "<h1>This is test file</h1>";
    for (let i = 0; i < 10; i++) {
      fs.appendFile("temp/test.html", data, (err) => {
        if (err) throw err;
      });
    }
    res.write("file is created");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.readFile("page/404.html", "utf-8", (err, data) => {
      if (err) throw Error;
      res.write(data);
      res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`server running on port: ${port}📡`);
});
