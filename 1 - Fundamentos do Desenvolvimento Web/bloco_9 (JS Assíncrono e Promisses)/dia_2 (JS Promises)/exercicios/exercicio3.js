// A PROMISE ANTERIOR COM RESOLVE, ATRAVÉS DO THEN, RETORNARÁ UM ARRAY COM A OPERAÇÃO MATEMÁTICA SOLICITADA
const fetchPromise = () =>{
  const promise = new Promise((resolve, reject) => {
    let array = [];
    for (let index = 0; index < 10; index += 1) {
      array.push(Math.floor(Math.random() * 51) ** 2)
    }
    const number = array.reduce((acc, cur) => acc + cur);
    if (number < 8000) {
      return resolve(number);
    }
    reject()
  });
  promise
  .then((number) => {
    resultArray = [2, 3, 5, 10].map((dividedBy) => number/dividedBy)
    console.log(resultArray)
  })
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

fetchPromise();