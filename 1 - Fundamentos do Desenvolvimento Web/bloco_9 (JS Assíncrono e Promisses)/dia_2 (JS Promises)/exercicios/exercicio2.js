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
.then(() => console.log('Promise aceita'))
.catch(() => console.log('Promise rejeitada'))
