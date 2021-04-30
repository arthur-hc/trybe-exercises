// Retorna um objeto contendo nome e email gerado
const addEmployeeInfo = (name) => {
  let email = `${name.toLowerCase().replace(/\s/gi, '_')}@trybe.com`;
  return {name, email};
};

//Retorna um objeto com id nomes e email adicionados através da função anterior, utilizando como parâmetro os nomes no objeto employees
const newEmployees = (block) => {
  const employess = {
    id1: block('Arthur Hermann'),
    id2: block('Lucas Gil'),
    id3: block('Igor Akio'),
  }
  return employess
};

console.log(newEmployees(addEmployeeInfo));

//Retorna checagem de dois números
const checkBet = (num1,num2) => {
  return num1 === num2
};

//Retorna uma mensagem de acordo com o resultado gerado e aposta feita passada como parâmetro, e utiliza a função anterior passando como parâmetro para checar a equidade dos valores
const betResult = (yourBet, block) => {
  const result = Math.floor(Math.random()*6)
  if (block(result,yourBet)) {
    return 'Parabéns, você ganhou!'
  } else {
    return 'Tente novamente'
  }
}

console.log(betResult(4,checkBet));
