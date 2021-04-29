const assert = require('assert');
// Função
const greetPeople = (people) => {
  let greeting = []
  for (person in people) {
    greeting.push(`Hello ${people[person]}`);
  }
  return greeting;
};
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

  assert.deepStrictEqual(greetPeople(parameter), result);
