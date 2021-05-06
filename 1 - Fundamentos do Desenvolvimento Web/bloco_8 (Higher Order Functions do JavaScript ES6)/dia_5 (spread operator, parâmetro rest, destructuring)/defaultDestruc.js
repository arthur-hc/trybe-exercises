//RELEMBRANDO...
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { name, lastName, age } = person;
console.log(name, age, lastName)

//SE TENTAR ARMAZENAR UMA PROPRIEDADE INEXISTENTE, RETORNARÁ UNDEFINED
const { nationality} = person;
console.log(nationality)

//MAS É POSSIVEL CRIAR A PROPRIEDADE
const { createNationality = 'Brazilian'} = person
console.log(createNationality)

//OBSERVE QUE NÃO ALTEROU O OBJETO ORIGINAL
console.log(person)

//PARA DESESTRUTURAR UM ARRAY
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

//PRATICANDO
const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality!==undefined? nationality : nationality2}`;

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};
const { nationality2 = 'Brazilian'} = person
console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));


//ALTERNATIVA AO ANTERIOR
const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));