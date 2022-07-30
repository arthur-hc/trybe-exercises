// NAME=movieModelGetAll npm test
const { expect } = require('chai');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../../models/connection');
const MovieModel = require('../../models/movieModel');


describe('Busca todos os filmes no BD', () => {
  before(async () => {
    const DBServer = new MongoMemoryServer();
    const URLMock = await DBServer.getUri();

     connectionMock = await MongoClient
      .connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then((conn) => conn.db('model_example'));

    
    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });

  after(async () => {
    await mongoConnection.getConnection.restore();
  }); 
  
  describe('quando não existe nenhum filme criado', () => {
    it('retorna um array', async () => {
      const movies = await MovieModel.getAll();

      expect(movies).to.be.a('array');
    });

    it('o array está vazio', async () => {
      const movies = await MovieModel.getAll();

      expect(movies).to.be.empty;
    });

  });
  describe('quando existem nenhum filmes criados', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };
    // // PARA INSERIR ANTES DA EXECUÇÃO
    before(async () => {
      await connectionMock.collection('movies').insertOne({ ...payloadMovie });
    });

    // // PARA DELETAR DEPOIS (APENAS BOAS PRÁTICAS, POIS O SERVIDOR FAKE MONGO JÁ CAI)
    after(async () => {
      await connectionMock.collection('movies').drop();
    });
    it('retorna um array', async () => {
      const movies = await MovieModel.getAll();

      expect(movies).to.be.a('array');
    });

    it('o array não está vazio', async () => {
      const movies = await MovieModel.getAll();

      expect(movies).to.not.be.empty;
    });

  });
})