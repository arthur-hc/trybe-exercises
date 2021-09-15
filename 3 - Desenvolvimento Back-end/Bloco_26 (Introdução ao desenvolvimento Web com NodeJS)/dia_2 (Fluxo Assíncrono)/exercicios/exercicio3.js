const exe1 = require('./exercicio1');

const exe3 = async () => {
  const randomNums = [];
  for(let i = 0; randomNums.length <= 2; i += 1) {
    const number = Math.floor(Math.random() * 100 + 1);
    randomNums.push(number);
  };
  try {
    const result = await exe1(...randomNums)
    console.log(result);
  } catch (error) {
    console.log(error);
  };
}

exe3();