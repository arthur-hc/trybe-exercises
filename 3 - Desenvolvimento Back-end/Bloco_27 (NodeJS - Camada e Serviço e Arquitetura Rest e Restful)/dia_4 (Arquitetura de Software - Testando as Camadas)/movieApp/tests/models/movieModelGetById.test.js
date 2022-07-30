// NAME=movieModelGetById npm test
const { expect } = require('chai');
const sinon = require('sinon');
const {ObjectId} = require('mongodb');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../../models/connection');
const MovieModel = require('../../models/movieModel');


describe('Busca o filme no BD pelo ID', () => {
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
  
  describe('quando não existe nenhum filme com o ID buscado', () => {
    it('retorna null', async () => {
      const movie = await MovieModel.getById("612f9787f77a4e8a091f365e");

      expect(movie).to.be.null;
    });
  });
  describe('quando existe um filme com o ID buscado', () => {
    const payloadMovie = {
      _id : ObjectId("612f9787f77a4e8a091f365e"),
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

    it('retorna um objeto', async () => {
      const movie = await MovieModel.getById("612f9787f77a4e8a091f365e");

      expect(movie).to.be.an('object');
    });

    it('não retorna null', async () => {
      const movie = await MovieModel.getById("612f9787f77a4e8a091f365e");

      expect(movie).to.not.be.null;
    });

    it('não retorna um objeto com os campos corretos', async () => {
      const movie = await MovieModel.getById("612f9787f77a4e8a091f365e");

      expect(movie).to.have.all.keys('_id', 'title', 'directedBy', 'releaseYear');
    });

    it('retorna um filme com o ID buscado', async () => {
      const movie = await MovieModel.getById("612f9787f77a4e8a091f365e");
      expect(movie).to.deep.include({ _id: payloadMovie._id });
    });
  });
})