const express = require("express");
const app = express();
const post = require("./model/post");
const handlebars = require("express-handlebars").engine;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (requisição, resposta) => {
  resposta.render("inicial");
});

app.get("/cadastra", (req, res) => {
  res.render("cadastra");
});
app.post("/cadastrar", (req, res) => {
  post.create({
    nome: req.body.STRING,
    observacao: req.body.STRING,
    tel: req.body.NUMBER,
  });
});

app.listen(8081, () => {
  console.log("ativado");
});
