// importar express
let express = require("express");

// criar varival com as funcionalidades
let app = express();

// rota
app.get("/", (req, res) => {
  res.send("<h1>Aprendendo Node.js </h1>");
});

app.get("/sobre/:nome/:idade", (req, res) => {
  res.send(
    "<h1>Olá " +
      req.params.nome +
      " você tem " +
      req.params.idade +
      " anos.</h1>",
  );
});

// servidor
app.listen(8080);
