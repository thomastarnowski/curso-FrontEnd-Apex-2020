// importar express
let express = require("express");

// importar express-handlebars
let handlebars = require("express-handlebars");

// app
let app = express();

// template
app.engine("handlebars", handlebars({ defaultLayout: "principal" }));
app.set("view engine", "handlebars");

// rotas
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/sobre", (req, res) => {
  res.render("sobre");
});

app.get("/contato", (req, res) => {
  res.render("contato");
});

// servidor
app.listen(8080);
