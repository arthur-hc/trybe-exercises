// NAME=movieControllerGetById npm test
const sinon = require('sinon');
const { expect } = require('chai');

const MoviesController = require('../../controllers/movieController');
const MoviesServices = require('../../services/movieService');
const {ObjectId} = require('mongodb');

const payloadMovie = {
  _id : ObjectId("612f9787f77a4e8a091f365e"),
  title: 'Example Movie',
  directedBy: 'Jane Dow',
  releaseYear: 1999,
};

describe('Ao chamar o controller de getById', () => {
  describe('quando não existem filmes no banco de dados', async () => {
    let request = {};
    let response = {};
    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(MoviesServices, 'getById').resolves(null)
    });

    after(() => {
      MoviesServices.getById.restore()
    });

    it('é chamado o método "status" passando o código 404', async () => {
      await MoviesController.getById(request, response);

      expect(response.status.calledWith(404)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um array', async () => {
      await MoviesController.getById(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });

    it('é chamado o método "json" passando uma array vazia', async () => {
      await MoviesController.getById(request, response);

      expect(response.json.calledWith({ message: 'Não encontrado' })).to.be.equal(true);
    });
  });

  describe('quando existem filmes no banco de dados', async () => {
    let request = {};
    let response = {};
    before(() => {
      request.body = {
        id: '604cb554311d68f491ba5781',
      };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(MoviesServices, 'getById').resolves(
        {
          _id: ObjectId("612f9787f77a4e8a091f365e"),
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        }
      )
    });

    after(() => {
      MoviesServices.getById.restore()
    });

    it('é chamado o método "status" passando o código 200', async () => {
      await MoviesController.getById(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um objeto', async () => {
      await MoviesController.getById(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });

    it('é chamado o método "json" passando uma objeto com o filme encontrado', async () => {
     await MoviesController.getById(request, response);

     expect(response.json.calledWith(payloadMovie)).to.be.equal(true);
    });
  });
});