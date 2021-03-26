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
