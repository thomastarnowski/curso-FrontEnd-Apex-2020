// importar express
let express = require("express");

// app
let app = express();

// rota
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pagina.html");
});

// servidor
app.listen(8080);
