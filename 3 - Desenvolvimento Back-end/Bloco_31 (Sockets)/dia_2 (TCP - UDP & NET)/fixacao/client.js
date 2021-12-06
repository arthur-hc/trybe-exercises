// const net = require('net');
// /* Através do pacote NET, nós podemos não só criar servidores como podemos conectar nossos clientes aos servidores */
// const client = net.connect({ port: 8080 }, () => {
//   console.log('Cliente conectado ao servidor!');
// });

// /* Assim como no servidor, também temos eventos do lado do cliente, onde o evento 'data' é ativado quando o servidor envia uma mensagem para o cliente. */
// client.on('data', (data) => {
//   console.log(data.toString());
//   client.end();
// });

// /* Quando a conexão é interrompida/terminada, é ativado o evento 'end', onde podemos limpar alguns caches, dar uma mensagem para usuário, atualizar algum dado no banco de dados etc. */
// client.on('end', () => {
//   console.log('Desconectado do servidor');
// });

// EXEMPLO RENATO
const net = require('net');
const stdin = process.openStdin();

const client = net.Socket();

/* Através do pacote NET, nós podemos não só criar servidores como podemos conectar nossos clientes aos servidores */
 client.connect(8080, 'localhost', () => {
  console.log('Cliente conectado ao servidor!');

  stdin.addListener('data', (text) => {
    const message = text.toString().trim();
    client.write(message);
  });
});

/* Assim como no servidor, também temos eventos do lado do cliente, onde o evento 'data' é ativado quando o servidor envia uma mensagem para o cliente. */
client.on('data', (data) => {
  console.log(data.toString());
});

/* Quando a conexão é interrompida/terminada, é ativado o evento 'end', onde podemos limpar alguns caches, dar uma mensagem para usuário, atualizar algum dado no banco de dados etc. */
client.on('end', () => {
  console.log('Desconectado do servidor');
});