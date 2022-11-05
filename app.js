//fonte: https://github.com/JenifferHerrera/NodeWeb

const express = require("express");
const app = express();
const port = 3000;
app.get("/calculadora", (req, res) => {
  let numero = parseFloat(req.query.numero);
  let numero2 = parseFloat(req.query.numero2);
  let operacao = req.query.operacao;
  const calculadora = {
    get operacao() {
      switch (operacao) {
        case "somar":
          var resultado = numero + numero2;
          return resultado;
        case "subtrair":
          var resultado = numero - numero2;
          return resultado;
        case "multiplicar":
          var resultado = numero * numero2;
          return resultado;
        case "dividir":
          switch (numero2) {
            case 0:
              var resultado = "operacao invalida";
              return resultado;
            default:
              var resultado = numero / numero2;
              return resultado;
          }
        default:
          break;
      }
    },
  };
  res.json(calculadora);
});

app.listen(port, () => console.log(`Run in ${port}!`));
