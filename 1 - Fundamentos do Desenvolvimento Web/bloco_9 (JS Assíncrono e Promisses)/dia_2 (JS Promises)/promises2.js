// ENTENDENDO FUNÇÃO FETCH...
const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

// OBS, SE DER CONSOLE LOG DIRETAMENTE, IRÁ APARECER PEDDING POR CONTA QUE ELE EXECUTA ANTES DO TERMINO DA REQUISIÇÃO. SE UTILIZADO SET TIMEOUT COM 10 SEGUNDO, IRÁ RETORNAR A PIADA

// EM SEGUIDA, SERÁ CRIADO UMA FUNÇÃO, MAS DEVIDO POR ESTAR NO MODO SINCRONO, NÃO IRÁ ESPERAR A CONCLUSÃO DA VERIFIEDFETCH
function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)//.then((message) => console.log(message)) poderia solucionar, mas poderia se tornar um problema dependendo do tamanho do código
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");

//SOLUÇÃO async e await. ASYNC IRÁ TRANFORMAR QUALQUER FUNÇÃO EM UMA PROMISE
//TROQUE RESOLVE POR RETUNR
const fetch = require('node-fetch');

async function verifiedFetch(url) { //async torna a função assincrona assim como promise. POR SI SÓ NÃO RESOLVERIA O PROBLEMA
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => r.value);
  }
  throw new Error('endpoint não existe');
}

async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev') // MAS ADICIONANDO AWAIT, FARÁ COM QUE A FUNCÃO SEJA EXECUTADA DA MANEIRA CORRETA
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");