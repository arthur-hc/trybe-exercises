const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const server = require('../src/api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /api/users/:userId', () => {
  describe('quando não é enviado um token', () => {
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
          .get('/api/users/qualquerID')
          .send({
              username: 'jane',
              password: 'senha123'
          });
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna o código de status 400', () => {
      expect(response).to.have.status(400);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('a propriedade "message" possui o texto "Token não encontrado ou informado"', () => {
      expect(response.body.message)
      .to.be.equal('Token não encontrado ou informado');
    });
  });

  describe('quando o token não pertence ao usuário buscado', () => {
    const _id = '605de6ded1ff223100cd6aa1';
    const wrongId = '565de6ded1ff223100cd6aa2';
    

    let response = {};
    const DBServer = new MongoMemoryServer();
      
    before(async () => {
      const URLMock = await DBServer.getUri();
        const connectionMock = await MongoClient.connect(URLMock,
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        

      sinon.stub(MongoClient, 'connect')
          .resolves(connectionMock);
          

      const usersCollection = await connectionMock.db('jwt_exercise').collection('users');

      await usersCollection.insertOne({
        _id,
        username: 'user-ok',
        password: 'senha-ok'
      });

      // NO GABARITO ESSA OPÇÃO DE INSERÇÃO PODERIA SER EXECUTADA DE FORMA DIRETA
      // connectionMock.db('jwt_exercise')
      //   .collection('users')
      //   .insertOne({
      //       _id: EXAMPLE_ID,
      //       username: 'fake-user',
      //       password: 'fake-password',
      //       name: 'fake-name',
      //       birthdate: '01/01/1960',
      //       biography: 'fake-biography',
      //   })
      
      const token = await chai.request(server)
      .post('/api/login')
      .send({
        username: 'user-ok',
        password: 'senha-ok'
      })

      response = await chai.request(server)
      .get(`/api/users/${wrongId}`)
      .set({
        'authorization': token
      });
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna o código de status 401', () => {
      expect(response).to.have.status(401);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('a propriedade "message" possui o texto "Acesso negado"', () => {
      expect(response.body.message)
      .to.be.equal('Acesso negado');
    });
  });

  describe('quando utilizado o token com usuário correto', () => {
    const _id = '605de6ded1ff223100cd6aa1';

    let response = {};
    const DBServer = new MongoMemoryServer();
      
    before(async () => {
      const URLMock = await DBServer.getUri();
        const connectionMock = await MongoClient.connect(URLMock,
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        

      sinon.stub(MongoClient, 'connect')
          .resolves(connectionMock);
          

      const usersCollection = await connectionMock.db('jwt_exercise').collection('users');

      await usersCollection.insertOne({
        _id,
        username: 'user-ok',
        password: 'senha-ok'
      });
      
      const token = await chai.request(server)
      .post('/api/login')
      .send({
        username: 'user-ok',
        password: 'senha-ok'
      })

      response = await chai.request(server)
      .get(`/api/users/${_id}`)
      .set({
        'authorization': token
      });
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna o código de status 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "_id"', () => {
      expect(response.body).to.have.property('_id');
    });

    it('o objeto possui a propriedade "name"', () => {
      expect(response.body).to.have.property('name');
    });

    it('o objeto possui a propriedade "password"', () => {
      expect(response.body).to.have.property('password');
    });

    it(`a propriedade "_id" possui o texto ${_id}`, () => {
      expect(response.body._id)
      .to.be.equal(_id);
    });

    it(`a propriedade "name" possui o texto user-ok`, () => {
      expect(response.body._id)
      .to.be.equal('user-ok');
    });

    it(`a propriedade "password" possui o texto senha-ok`, () => {
      expect(response.body._id)
      .to.be.equal('senha-ok');
    });
  });
});