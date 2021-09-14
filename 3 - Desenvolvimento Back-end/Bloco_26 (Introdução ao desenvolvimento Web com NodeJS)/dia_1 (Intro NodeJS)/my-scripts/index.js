const { question } = require('readline-sync');

const scriptToRun = question(`Digite o número do script que deseja executar:
1 - IMC (Verifica a sua categoria de IMC de acordo com o peso e altura informado)
2 - Velocidade (Retorna a velocidade média de acordo com espaço e tempo informado)
3 - Sorteio (Jogo na qual a pessoa usuária pode escolher um número de 0 a 10 para tentar acertar em um sorteio)
4 - Fatorial (Retorna o fatorial do número informado)
5 - Retorna a quantidade de números da sequência fibonacci
`);

const RunScript = () => {
  switch (true) {
    case scriptToRun == 1:
      require('./imc');
      break;
    
    case scriptToRun == 2:
      require('./velocidade');
      break;

    case scriptToRun == 3:
      require('./sorteio');
      break;

    case scriptToRun == 4:
      require('./fatorial');
      break;

    case scriptToRun == 5:
      require('./fatorial');
      break;
  
    default:
      console.log("Opção inválida")
      break;
  }
}
RunScript();