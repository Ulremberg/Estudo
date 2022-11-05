const calculadora = (numero, numero2, operacao) => {
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
  return calculadora;
};

module.exports = { calculadora };
