const fib = (n) => {
  array = [0, 1]
  let previusNumberIndex = 0
  let currentNumberIndex = 1

  if(n < 2) return n

  while (array.length < n) {
    const newNumber = array[previusNumberIndex] + array[currentNumberIndex]
    array.push(newNumber)
    previusNumberIndex += 1
    currentNumberIndex += 1
  }
  return array
}

console.log(fib(12))