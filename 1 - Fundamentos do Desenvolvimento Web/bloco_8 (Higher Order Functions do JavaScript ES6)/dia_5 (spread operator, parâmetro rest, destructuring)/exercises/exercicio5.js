const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo
const swap = (array) => array.reverse()


const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);

//OUTRA SOLUÇÃO EM LINHA COM A MATÉRIA
const swap2 = ([a, b, c]) => [c, b, a];