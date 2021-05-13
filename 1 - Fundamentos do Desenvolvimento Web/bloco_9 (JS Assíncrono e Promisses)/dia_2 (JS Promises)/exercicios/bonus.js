const sumArrayNum = () => {
  let array = [];
  for (let index = 0; index < 10; index += 1) {
    array.push(Math.floor(Math.random() * 51) ** 2)
  }
  const number = array.reduce((acc, cur) => acc + cur);
  if (number < 8000) {
    return number;
  }
  throw new Error();
}

const createResultArray = (number) => [2, 3, 5, 10].map((dividedBy) => number/dividedBy);

const fetchPromise = async () => {
  try {
    const sum = sumArrayNum();
    const arrayResults = createResultArray(sum);
    console.log(arrayResults);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();