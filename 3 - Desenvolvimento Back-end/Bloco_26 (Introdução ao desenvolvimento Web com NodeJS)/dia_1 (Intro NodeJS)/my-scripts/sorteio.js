const { questionInt, question } = require('readline-sync');

const game = () => {
  const n = questionInt("Escolha um número de 0 a 10: ");
  
  const randomNum = Math.floor(Math.random() * 10);
  randomNum === n ? console.log("Parabéns, número correto!") : console.log(`Opa, não foi dessa vez. O número era ${randomNum}`)

  const wantNewGame = question("Deseja jogar novamente?(s/n) ");
  wantNewGame === "s" ? game() : "";
};

game();