// Observe como os códigos rodam de forma independente
setTimeout(() => {
  console.log('Comprar parafusos') // Comprar parafusos
  console.log('Adicionar ao estoque') // Adicionar ao estoque
}, 2000);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro
// <=================================================>

// EXERCÍCIO DE FIXAÇÃO, EXECUTE CADA BLOCO POR VEZ
const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

let numbers = [];

// Assim passaria
// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

//Com setTimeOut não...
setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepStrictEqual(numbers, [1, 2, 3]);
// <=================================================>

// Fazendo com que o teste também seja executado após 3000 (3 segundos), irá passar
const assert = require('assert');

const pushNumber = (list, number) => {
  list.push(number);
  console.log(list);
};

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 1]), 3000);
// <=================================================>