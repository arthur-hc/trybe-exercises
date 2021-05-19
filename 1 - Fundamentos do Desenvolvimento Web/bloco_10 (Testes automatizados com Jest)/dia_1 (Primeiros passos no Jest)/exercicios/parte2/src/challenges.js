// Desafio 1
function compareTrue(valor1, valo2) {
  return valor1 && valo2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(word) {
  return word.split(' ');
}

// Desafio 4
function concatName(names) {
  let firstAndLast = names[names.length - 1].concat(', ') + names[0];
  return firstAndLast.toString();
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function maxNum(numbers) {
  let higherNum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherNum) {
      higherNum = numbers[index];
    }
  }
  return higherNum;
}

function highestCount(numbers) {
  let timesNum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === maxNum(numbers)) {
      timesNum += 1;
    }
  }
  return timesNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let winner = '';
  if (distCat1 === distCat2) {
    winner = 'os gatos trombam e o rato foge';
  } else if (distCat2 > distCat1) {
    winner = 'cat1';
  } else {
    winner = 'cat2';
  }
  return winner;
}

// Desafio 8
function fizzBuzz(numbers) {
  let phrase = [];
  for (let index = 0; index < numbers.length; index += 1) {
    switch (true) {
    case (numbers[index] % 15 === 0):
      phrase.push('fizzBuzz');
      break;
    case (numbers[index] % 3 === 0):
      phrase.push('fizz');
      break;
    case (numbers[index] % 5 === 0):
      phrase.push('buzz');
      break;
    default:
      phrase.push('bug!');
    }
  }
  return phrase;
}

// Desafio 9
function encode(phrase) {
  phrase = phrase.replace(/a/g, 1);
  phrase = phrase.replace(/e/g, 2);
  phrase = phrase.replace(/i/g, 3);
  phrase = phrase.replace(/o/g, 4);
  phrase = phrase.replace(/u/g, 5);
  return phrase;
}
function decode(phrase) {
  phrase = phrase.replace(/1/g, 'a');
  phrase = phrase.replace(/2/g, 'e');
  phrase = phrase.replace(/3/g, 'i');
  phrase = phrase.replace(/4/g, 'o');
  phrase = phrase.replace(/5/g, 'u');
  return phrase;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
