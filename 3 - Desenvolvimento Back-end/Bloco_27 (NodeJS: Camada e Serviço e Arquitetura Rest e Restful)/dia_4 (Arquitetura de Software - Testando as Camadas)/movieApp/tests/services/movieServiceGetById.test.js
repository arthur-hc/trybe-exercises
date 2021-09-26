// NAME=movieServiceGetById npm test
const sinon = require('sinon');
const { expect } = require('chai');
const {ObjectId} = require('mongodb');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');


describe('Busca filmes no BD pelo ID', () => {
  describe('quando não existe nenhum com o ID buscado', async () => {
    before(() => {
      sinon.stub(MoviesModel, 'getById')
      .resolves(null);
    });
    
    after(() => {
      MoviesModel.getById.restore();
    });

    it('retorna null', async () => {
      const response = await MoviesService.getById("612f9787f77a4e8a091f365e");

      expect(response).to.be.null;
    });
  });
  describe('quando existe um filme com o ID buscado', async () => {
    const payloadMovie = {
      _id : ObjectId("612f9787f77a4e8a091f365e"),
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      sinon.stub(MoviesModel, 'getById')
      .resolves(
        {
          _id : ObjectId('612f9787f77a4e8a091f365e'),
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        }
      );
    });
    
    after(() => {
      MoviesModel.getById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.getById('612f9787f77a4e8a091f365e');

      expect(response).to.be.an('object');
    });

    it('não retorna null', async () => {
      const response = await MoviesService.getById('612f9787f77a4e8a091f365e');

      expect(response).to.not.be.null;
    });

    it('não retorna um objeto com os campos corretos', async () => {
      const movie = await MoviesService.getById("612f9787f77a4e8a091f365e");

      expect(movie).to.have.all.keys('_id', 'title', 'directedBy', 'releaseYear');
    });

    it('retorna um filme com o ID buscado', async () => {
      const movie = await MoviesService.getById("612f9787f77a4e8a091f365e");
      expect(movie).to.deep.include({ _id: payloadMovie._id });
    });
  });
});