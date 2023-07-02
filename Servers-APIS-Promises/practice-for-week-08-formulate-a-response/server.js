// Your code here
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  const body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World!</title>
    </head>
    <body>
        <h1>Hello there!</h1>
    </body>
    </html>
    `;
  res.end(body);
});

const port = 3000
server.listen(port, () => console.log("listening on port " + port))
