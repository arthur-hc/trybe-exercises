// NAME=movieControllerGetAll npm test
const sinon = require('sinon');
const { expect } = require('chai');

const MoviesController = require('../../controllers/movieController');
const MoviesServices = require('../../services/movieService');

const expectedMovies = [{
  id: '604cb554311d68f491ba5781',
  title: 'Example Movie',
  directedBy: 'Jane Dow',
  releaseYear: 1999,
}]

describe('Ao chamar o controller de gettAll', () => {
  describe('quando não existem filmes no banco de dados', async () => {
    let request = {};
    let response = {};
    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(MoviesServices, 'getAll').resolves([])
    });

    after(() => {
      MoviesServices.getAll.restore()
    });

    it('é chamado o método "status" passando o código 200', async () => {
      await MoviesController.getAll(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um array', async () => {
      await MoviesController.getAll(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });

    it('é chamado o método "json" passando uma array vazia', async () => {
      await MoviesController.getAll(request, response);

      expect(response.json.calledWith([])).to.be.equal(true);
    });
  });

  describe('quando existem filmes no banco de dados', async () => {
    let request = {};
    let response = {};
    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(MoviesServices, 'getAll').resolves([
        {
          id: '604cb554311d68f491ba5781',
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        }
      ])
    });

    after(() => {
      MoviesServices.getAll.restore()
    });

    it('é chamado o método "status" passando o código 200', async () => {
      await MoviesController.getAll(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um array', async () => {
      await MoviesController.getAll(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });

    it('é chamado o método "json" passando uma array com os filmes cadastrados', async () => {
      await MoviesController.getAll(request, response);

      expect(response.json.calledWith(expectedMovies)).to.be.equal(true);
    });
  });
});