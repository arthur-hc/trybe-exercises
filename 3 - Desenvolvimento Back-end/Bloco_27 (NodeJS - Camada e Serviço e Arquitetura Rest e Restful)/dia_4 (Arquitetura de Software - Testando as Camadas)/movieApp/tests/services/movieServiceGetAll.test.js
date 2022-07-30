// NAME=movieServiceGetAll npm test
const sinon = require('sinon');
const { expect } = require('chai');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');


describe('Busca filmes no BD', () => {
  describe('quando não existe nenhum filme criado', async () => {
    before(() => {
      sinon.stub(MoviesModel, 'getAll')
      .resolves([]);
    });
    
    after(() => {
      MoviesModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const response = await MoviesService.getAll();

      expect(response).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const response = await MoviesService.getAll();

      expect(response).to.be.empty;
    });
  });
  describe('quando existem filmes criados', async () => {
    before(() => {
      sinon.stub(MoviesModel, 'getAll')
      .resolves([
        {
          id: '604cb554311d68f491ba5781',
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        }
      ]);
    });
    
    after(() => {
      MoviesModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const response = await MoviesService.getAll();

      expect(response).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const response = await MoviesService.getAll();

      expect(response).to.not.be.empty;
    });

    it('o array que contém um filme com o título Example Movie', async () => {
      const response = await MoviesService.getAll();
      

      const expectedReturn = [
        {
          id: '604cb554311d68f491ba5781',
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        }
      ];

      expect(response[0].title).to.be.equal(expectedReturn[0].title);
    });
  });
});