const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  const average = (array) => {
    const sizeArray = array.length;
    const sum = array.reduce((acc, current) => acc + current,0)
    return sum/sizeArray
  }
  
  return students.map((student, index) => {
    return {name: student, average: average(grades[index])}
  })
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
console.log(studentAverage())