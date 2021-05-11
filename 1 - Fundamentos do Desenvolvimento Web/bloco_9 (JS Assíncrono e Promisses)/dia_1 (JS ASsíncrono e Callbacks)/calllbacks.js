// CALLBACKS RESUMIDAMENTE SÃO FUNÇÕES PASSADAS COMO PARÂMETRO PARA OUTRA FUNÇÃO...

// SERÁ IMPLEMENTADA UMA FUNC QUE RETORNE UM BALANÇO DE ENTRADAS E SAÍDAS DO MÊS
const myExpenses = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const myIncome = 1000;

const monthlyBudget = (myIncome, myExpenses, callback) => {

  const totalExpenses = callback(myExpenses);
  const totalAfterExpenses = myIncome - totalExpenses;

  console.log(`Balanço do mês:
    Recebido: R$${myIncome},00
    Gasto: R$${totalExpenses},00
    Saldo: R$${totalAfterExpenses},00 `);
};

// REPARE QUE CRIA-SE UMA FUNÇÃO PARA SER INSERIDA COMO CALLBACK NA FUNÇÃO PRINCIPAL. ESSA FUNÇÃO É A RESPONSÁVEL POR LIDAR COM AS DESPESAS
const handleExpenses = myExpenses => {
  const eachValue = myExpenses.map((item) => Object.values(item)[0]);
  const totalExpense = eachValue.reduce((acc, curr) => acc + curr , 0);
  return totalExpense;
};

monthlyBudget(myIncome, myExpenses, handleExpenses);

//<=============================================================>

//EXERCICIO DE FIXAÇÃO DE CALLBACKS
// COMPLETE getUser PARA UTILIZAR CALLBACKS
const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callback(userToReturn) // FOI IMPLEMENTADO ESSA CALBACK QUE ERA O PARÂMETRO DA FUNC
};

assert.strictEqual(getUser(userFullName), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.strictEqual(getUser(userNationality), "Ivan is Russian"); // complete a chamada da função de getUser

//<=============================================================>

// NESSE PRÓXIMO EXEMPLO É IMPLEMENTADO setTimeOut
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(callback(user));
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
delay();
delay();
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo