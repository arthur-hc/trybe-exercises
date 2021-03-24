let resultado = 'aprovada';

switch (resultado) {
  case 'aprovada':
    console.log ('Parbéns pela aprovação');
    break;

  case 'lista':
    console.log ('Aguarde')
    break;
  
  case 'reprovada':
    console.log ('Tente no próximo processo seletivo')
    break;

  default:
    console.log ('Error')
}