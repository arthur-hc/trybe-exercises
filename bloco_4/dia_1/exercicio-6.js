let peca = 'Rainha'
let pecaProgram = peca.toLowerCase()

switch (pecaProgram) {
    case 'peão':
      console.log ('Para frente');
      break;

    case 'bispo':
      console.log ('Diagonal');
      break;
    
    case 'torre':
      console.log ('Linha reta horizontal e vertical');
      break;
    
    case 'cavalo':
      console.log ('Em L');
      break;
    
    case 'rainha':
      console.log ('Em linha reta horizontal, vertical ou diagonal');
      break;
    
    case 'rei':
      console.log ('Em todas direções, mas apenas 1 casa');
      break;

    default:
      console.log ('Peça inválida');
}

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop -> diagonals