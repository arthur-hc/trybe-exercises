const { questionInt } = require('readline-sync');

const n = questionInt("Digite um número positivo e maior que 0 para retornar seu fatorial ");

const fatorial = () => {
  if (n <= 0) return "Número inválido"
  let fatorial = 1;
  for(let index = 1; index <= n; index += 1) {
    fatorial *= index;
  }
  return fatorial;
} 

console.log(fatorial());