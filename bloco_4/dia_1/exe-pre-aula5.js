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

//Crie uma variável para armazenar o estado da pessoa candidata ao processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
//Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica'