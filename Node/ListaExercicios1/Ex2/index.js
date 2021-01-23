let express = require("express");
let handlebars = require("express-handlebars");
// APP
let app = express();

let bodyParser = require("body-parser");
let = require("constants");
// BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// TEMPLATE
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// JSON ALUNOS
let alunos = [];

// ROTAS
app.get("/", (req, res) => {
  res.render("formulario", { alunos: alunos });
});

app.post("/cadastrar", (req, res) => {
  // obter dados
  let nome = req.body.nome;
  let nota1 = parseFloat(req.body.nota1);
  let nota2 = parseFloat(req.body.nota2);

  // media
  let media = (nota1 + nota2) / 2;

  // situacao
  let situacao = media >= 7 ? "Aprovado" : "Reprovado";

  // adicionr no JSON
  alunos.push({
    nome: nome,
    nota1: nota1,
    nota2: nota2,
    media: media,
    situacao: situacao,
  });

  // redirecionamento
  res.render("formulario", { alunos: alunos, cadastro: true });
});

app.get("/remover/:id", (req, res) => {
  alunos.splice(req.params.id, 1);
  res.render("formulario", { alunos: alunos, removido: true });
});

app.listen(8050);
