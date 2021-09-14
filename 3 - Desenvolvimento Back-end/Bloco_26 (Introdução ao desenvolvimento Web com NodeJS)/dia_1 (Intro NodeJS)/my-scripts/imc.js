const { questionFloat, questionInt } = require('readline-sync')

// Qual peso?
const p = questionFloat('Qual o seu peso(kg)? ');

// Qual altura?
const a = questionInt('Qual a sua altura(cm)? ');

// IMC
const IMC = () => {
  const IMC = p / ((a/100)**2)
  switch (true) {
    case IMC < 18.5:
      return "Abaixo do peso (magreza)";
    
    case IMC <= 24.9:
      return "Peso normal"

    case IMC <= 29.9:
      return "Acima do peso (sobrepeso)"
  
    case IMC <= 34.9:
      return "Obesidade grau I"

    case IMC <= 39.9:
      return "Obesidade grau II"
    
    case IMC >= 40:
      return "Obesidade graus III e IV"
  
    default:
      break;
  }
}

console.log(IMC());