const exe1 = require('./exercicio1');

const randomNums = [];
for(let i = 0; randomNums.length <= 2; i += 1) {
  const number = Math.floor(Math.random() * 100 + 1);
  randomNums.push(number);
};

exe1(...randomNums)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// *** ALTERNATIVA DO GABARITO. MANEIRA INTERESSANTE P/ CRIAR ARRAYS ***

// function getRandomNumber() {
//   return Math.floor(Math.random() * 100 + 1);
// }

// function callDoMath() {
//   /* Criamos um novo array de 3 posições e utilizamos o `map` para gerar um número aleatório para cada posição do Array */
//   const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

// doMath(...randomNumbers)
// .then(result => console.log(result))
// .catch(err => console.error(err.message))
// }