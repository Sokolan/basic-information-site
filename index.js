const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");

  let pageToLoad;
  switch (req.url) {
    case "/": {
      pageToLoad = "index";
      res.statusCode = 200;
      break;
    }
    case "/about": {
      pageToLoad = "about";
      res.statusCode = 200;
      break;
    }
    case "/contact-me": {
      pageToLoad = "contact-me";
      res.statusCode = 200;
      break;
    }
    default: {
      pageToLoad = "404";
      res.statusCode = 404;
      break;
    }
  }
  fs.readFile(`./${pageToLoad}.html`, (err, data) => {
    if (err) console.log(err);
    else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log(`listening to localhost at port 3000`);
});
