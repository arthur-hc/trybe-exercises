const { questionInt } = require('readline-sync');

const t = questionInt('Qual a distancia percorrida(km)? ');
const s = questionInt('Qual o seu tempo(minutos)? ');

const velocidadeMedia = () => {
  return t/(s/60)
}

console.log(velocidadeMedia());