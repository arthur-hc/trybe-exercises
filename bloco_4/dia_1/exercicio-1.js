let a = 10
let b = 2
let operacao = '//'

switch (operacao) {
    case '+':
      console.log (a+b);
      break;

    case '-':
      console.log (a-b);
      break;
    
    case '*':
      console.log (a*b);
      break;
    
    case '/':
      console.log (a/b);
      break;
    
    case '%':
      console.log (a%b);
      break;
    
    default:
      console.log ('Operação inválida');
}