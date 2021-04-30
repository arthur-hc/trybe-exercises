const addEmployeeInfo = (name) => {
  let email = `${name.toLowerCase().replace(/\s/gi, '_')}@trybe.com`;
  return {name, email};
};

const newEmployees = (block) => {
  const employess = {
    id1: block('Arthur Hermann'),
    id2: block('Lucas Gil'),
    id3: block('Igor Akio'),
  }
  return employess
};

console.log(newEmployees(addEmployeeInfo));

const checkBet = (num1,num2) => {
  return num1 === num2
};

const betResult = (yourBet, block) => {
  const result = Math.floor(Math.random()*6)
  if (block(result,yourBet)) {
    return 'Parabéns, você ganhou!'
  } else {
    return 'Tente novamente'
  }
}

console.log(betResult(4,checkBet));
