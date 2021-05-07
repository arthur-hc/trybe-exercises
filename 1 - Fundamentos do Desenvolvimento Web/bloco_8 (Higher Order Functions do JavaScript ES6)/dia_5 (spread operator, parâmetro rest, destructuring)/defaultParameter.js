//Se não utilizar usar
const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

//SOLUÇÃO ATÉ AQUI
const greeting = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting(); // Welcome usuário!

//NOVA PROPOSTA
//SE NÃO DEFINIR PARÂMETRO, SERÁ USUÁRIO, SE DEFINIR, SERÁ O PARÂMETRO
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!

//PRATICANDO...
const multiply = (number = 1, value = 1) => {
  // Escreva aqui a sua função
  return number*value
};

console.log(multiply(8));