const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  const reqUrl = req.url;
  let pageToLoad;
  switch (reqUrl) {
    case "/": {
      pageToLoad = "index";
      break;
    }
    case "/about": {
      pageToLoad = "about";
      break;
    }
    case "/contact-me": {
      pageToLoad = "contact-me";
      break;
    }
    default: {
      pageToLoad = "404";
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
