const soma = require("./calculo/soma");
const subtracao = require("./calculo/subtracao");
const multiplicacao = require("./calculo/multiplicacao");
const divisao = require("./calculo/divisao");

const calculadora = (valorA, valorB, operacao) => {
  switch(operacao) {
    case "soma":
      return soma(valorA, valorB);
    case "subtracao":
      return subtracao(valorA, valorB);
    case "multiplicacao":
      return multiplicacao(valorA, valorB);
    case "divisao":
      return divisao(valorA, valorB);
    default:
      break;
  }
};

module.exports = calculadora;