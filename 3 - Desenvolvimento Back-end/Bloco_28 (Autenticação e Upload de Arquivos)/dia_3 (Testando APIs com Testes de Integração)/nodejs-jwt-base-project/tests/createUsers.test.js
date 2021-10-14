const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const server = require('../src/api/app');

chai.use(chaiHttp);

// COM A UTILIZAÇÃO DO CHAI HTTP REALIZA-SE SEPARAÇÃO ENTRE SERVER(CONTINUA PARA CONTEXTOS DE NÃO TESTE) E APP (QUE SERÁ CONSUMIDO PELO CHAIHTTP). ***A SEPARAÇÃO ENTRE SERVER E APP É UMA BOA PRÁTICA, NÃO APENAS PARA TESTES***

// APESAR DE SER BOA PRÁTICA, PARA NÃO REALIZAR A SEPARAÇÃO NA TESTAGEM, BASTA EXPORTAR O APP CONTIDO NO INDEX OU ONDE É DEFINIDO
// module.exports = app

// ESSA EXTENSÃO PERMITE TESTAR REALMENTE CHAMANDO O ENDPOINT, NÃO APENAS CHAMANDO AS FUNÇÕES. EX:
/*
    Podemos chamar um `GET` que deve consumir nossa api,
    sem que pra isso precisemos subir ela manualmente

const response = await chai.request(server)
  .get('/exemplo');

    Da mesma forma, podemos chamar um `POST` passando um
    `body` e/ou um `header`, por exemplo:

const response = await chai.request(server)
  .post('/favorite-foods')
  .set('X-API-Key', 'foobar')
  .send({
      name: 'jane',
      favoriteFood: 'pizza'
  });

*/

const { expect } = chai;

describe('POST /api/users', () => {
    describe('quando é criado com sucesso', () => {
        let response = {};
        const DBServer = new MongoMemoryServer();
        
        before(async () => {
          const URLMock = await DBServer.getUri();
            const connectionMock = await MongoClient.connect(URLMock,
                { useNewUrlParser: true, useUnifiedTopology: true }
            );

          sinon.stub(MongoClient, 'connect')
              .resolves(connectionMock);

          response = await chai.request(server)
              .post('/api/users')
              .send({
                  username: 'jane',
                  password: 'senha123'
              });
        });

        after(async () => {
          MongoClient.connect.restore();
          await DBServer.stop();
        });

        it('retorna o código de status 201', () => {
            /*
                Perceba que aqui temos uma asserção
                específica para o status da `response` 😬
            */
            expect(response).to.have.status(201);
        });

        it('retorna um objeto', () => {
            expect(response.body).to.be.a('object');
        });

        it('o objeto possui a propriedade "message"', () => {
            expect(response.body).to.have.property('message');
        });

        it('a propriedade "message" possui o texto "Novo usuário criado com sucesso"',
            () => {
                expect(response.body.message)
                    .to.be.equal('Novo usuário criado com sucesso');
            }
        );
    });
});