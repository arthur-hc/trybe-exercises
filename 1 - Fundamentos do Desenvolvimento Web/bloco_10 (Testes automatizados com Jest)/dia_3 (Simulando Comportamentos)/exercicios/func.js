const fetch = require('node-fetch');

const randomNum = () => Math.floor(Math.random()*101)

const wordToUpper = (word) => word.toUpperCase();

const firstLetter = (word) => word[0]; // alternativa word.chartAt(0)

const joinWords = (w1, w2) => w1+w2; // alternativa w1.concat(w2)

const dogApi = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((dog) => dog)
}
dogApi()

module.exports = {
  randomNum,
  wordToUpper,
  firstLetter,
  joinWords,
  dogApi,
}