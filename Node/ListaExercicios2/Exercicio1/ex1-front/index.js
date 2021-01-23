/* express: npm i express
   express-handlebars: npm i express-handlebars
   body-parser: npm i body-parser
   node-fetch: npm i node-fetch
*/

let express = require("express");
let handlebars = require("express-handlebars");
let bodyParser = require("body-parser");
let fetch = require("node-fetch");

// APP
let app = express();

// TEMPLATE
app.engine("handlebars", handlebars({ defaultLayout: "principal" }));
app.set("view engine", "handlebars");

// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// especificar local com arquivos css js e imagens
app.use(express.static(__dirname + "/publico"));

// ROTAS
app.get("/", (req, res) => {
  // JSON
  let produtos = [];

  // obter dados da API
  fetch("http://localhost:3000/produtos", { method: "GET" })
    .then((retorno) => retorno.json())
    .then((dadosDoJson) => res.render("formulario", { vetor: dadosDoJson }));
});

app.post("/cadastrar", (req, res) => {
  // obter nome marca e valor
  let nome = req.body.nome;
  let marca = req.body.marca;
  let valor = req.body.valor;

  // JSON para efetuar o cadastro
  let dados = { nome: nome, marca: marca, valor: valor };

  // enviar para a API
  fetch("http://localhost:3000/produtos", {
    method: "POST",
    body: JSON.stringify(dados),
    headers: { "Content-Type": "application/json" },
  }).then(res.redirect("/"));
});

app.get("/remover/:id", (req, res) => {
  // obter o ID
  let id = req.params.id;

  // efetuar a exclusao atraves da API
  fetch("http://localhost:3000/produtos/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then(res.redirect("/"));
});

app.listen(8080);
