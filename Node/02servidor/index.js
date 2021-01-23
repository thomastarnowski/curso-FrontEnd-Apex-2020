// importar modulo http
let http = require("http");

// servidor
http
  .createServer((req, res) => {
    res.end("<h1>Aprendendo Node.js</h1>");
  })
  .listen(8080);
