const {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,} = require('./challenges')

  // console.log(typeof encode('aeiou'))

let teste = encode('bcdf')
console.log(encode('aeiou').length)
console.log(decode(`${encode('bcdf')} ${decode('6789')}`))