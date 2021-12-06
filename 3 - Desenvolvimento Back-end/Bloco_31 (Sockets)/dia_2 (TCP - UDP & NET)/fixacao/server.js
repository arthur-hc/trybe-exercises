// /* Importando o pacote NET, responsável pela implementação dos sockets no Node. */
// const net = require('net');

// /* Criando o servidor com o método 'createServer', onde recebe uma conexao na qual são expostos os eventos que podemos manipular no nosso servidor. */
// const server = net.createServer((connection) => {
//   console.log('Cliente conectado');

//   /* Assim como um evento normal do Node.js, o método ".on()" escuta um evento em específico e, quando ele é ativado, nossa função de callback é chamada. */
//   connection.on('end', () => {
//     console.log('Cliente desconectado');
//   });
//   /* Nessa conexão que foi aberta, podemos fazer várias coisas. Uma delas é escrever/devolver uma mensagem para o cliente. */
//   connection.write('Mensagem do servidor!\r\n');
//   connection.pipe(connection);
// });

// /* Após termos programado o servidor, é só colocá-lo de pé */
// server.listen(8080, () => {
//   console.log('Servidor escutando na porta 8080');
// });

// EXEMPLO RENATO


const net = require('net');

const connectedClients = [];
let clientId = 0;

const broadCastMessage = (from, message) => {
  connectedClients.forEach((client) => {
    if (client.id !== from.id) {
      client.write(message);
    }
  });
}

const server = net.createServer((socket) => {
  console.log('Novo cliente conectado');

  clientId = clientId + 1;
  socket.id = `Cliente ${clientId}`,

  socket.write(`Bem vindo, ${socket.id}!`);

  connectedClients.push(socket);

  broadCastMessage(socket, `O cliente #${socket.id} entrou!`);
  
  socket.on('data', (data) => {
    broadCastMessage(socket, `cliente #${socket.id} > ${data}`);
  });

  /* Assim como um evento normal do Node.js, o método ".on()" escuta um evento em específico e, quando ele é ativado, nossa função de callback é chamada. */
  socket.on('end', () => {
    console.log(`O Cliente #${socket.id} saiu!`);
    broadCastMessage(socket, `cliente #${socket.id} se desconectou`);
  });
});

/* Após termos programado o servidor, é só colocá-lo de pé */
server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});