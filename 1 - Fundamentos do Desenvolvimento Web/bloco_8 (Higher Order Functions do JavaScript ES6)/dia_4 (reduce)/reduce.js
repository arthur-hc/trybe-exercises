// O reduce possui um próprio acumulador, que é o primeiro parâmtro

const numbers = [32, 15, 3, 2, -5, 56, 10];
const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113.
//<------------------------------------------------------------------------------------------------------------->

const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

const sumNumbers = collection.reduce(getSum);
console.log(sumNumbers); // 15


const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113
//<------------------------------------------------------------------------------------------------------------->

//PODE SER ADICIONADO UM SEGUNDO PARÂMETRO PARA FUNÇÃO QUE SERÁ O ACUMULADO INICIAL
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 25); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113
//<------------------------------------------------------------------------------------------------------------->

//BUSCAR O MAIOR VALOR ATRAVÉS DO REDUCE
const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85
const newBigger = numbers.reduce((maior, number) => (maior > number)? maior : number,100)
console.log(newBigger)

//<------------------------------------------------------------------------------------------------------------->

//MINHA SOLUÇÃO
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const sumEven = numbers.reduce((sumEven, number) => (number % 2 ===0)? sumEven + number : sumEven)
console.log(sumEven)

//SOLUÇÃO DO COURSE
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152

//OUTRA SOLUÇÃO FEITA POR MIM
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const sumEven = (numbers.filter((number) => number % 2 ===0)).reduce((accumulator,number) => accumulator + number);
console.log(sumEven);

//<------------------------------------------------------------------------------------------------------------->
