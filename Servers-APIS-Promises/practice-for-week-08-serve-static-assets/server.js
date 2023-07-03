const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here

  if (req.method === "GET" && req.url === "/") {
    const indexFile = fs.readFileSync("./index.html");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    return res.end(indexFile);
  }
  if (
    req.method === "GET" &&
    req.url.split("/").length > 1 &&
    req.url.split("/")[1] === "static"
  ) {
    let path = req.url.split("/");
    extension = path[path.length - 1].split(".")[1];
    file = fs.readFileSync("./assets/" + path.slice(2).join("/"));
    if (extension === "css") {
      res.setHeader("Content-Type", "text/css");
    }

    if (extension === "jpg") {
      res.setHeader("Content-Type", "image/jpeg");
    }
    return res.end(file);
  }

  //we need to put the phase 2 code before the phase 1 OR set a route handler specificling for Get method and url of "/"
  // this is because if the phase 1 code is first or there's no route handling for it when its first, then we will always be loading the index file and sending it for every request, and wont get to process the requests for the css and images
  //the index file is requested first, and then when it's sent we load the requests from the index file for the css and image file
});

const port = 3000;

server.listen(port, () => console.log("Server is listening on port", port));
