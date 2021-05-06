
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const splitedNames = names.join().split('')
  return splitedNames.reduce((acc,current) => (current === 'A' || current === 'a')? acc + 1 : acc, 0)
}

assert.deepStrictEqual(containsA(), 20);
