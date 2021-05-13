const promise = new Promise((resolve, reject) => {
  let array = [];
  for (let index = 0; index < 10; index += 1) {
    array.push(Math.floor(Math.random() * 51) ** 2)
  }
  const number = array.reduce((acc, cur) => acc + cur);
  if (number < 8000) {
    return resolve(number);
  }
  reject(number)
})
.then((number) => {
  const resultArray = []
  resultArray.push(number/2, number/3, number/5, number/10)
  console.log(resultArray)
})
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
