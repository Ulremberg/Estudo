//fonte: https://github.com/JenifferHerrera/NodeWeb

const express = require("express");
const app = express();
const port = 3000;
const calculadora = require("./calculadora");

app.get("/calculadora", (req, res) => {
  let numero = parseFloat(req.query.numero);
  let numero2 = parseFloat(req.query.numero2);
  let operacao = req.query.operacao;
  const resultado = calculadora.calculadora(numero, numero2, operacao);
  res.json(resultado);
});

app.listen(port, () => console.log(`Run in ${port}!`));
