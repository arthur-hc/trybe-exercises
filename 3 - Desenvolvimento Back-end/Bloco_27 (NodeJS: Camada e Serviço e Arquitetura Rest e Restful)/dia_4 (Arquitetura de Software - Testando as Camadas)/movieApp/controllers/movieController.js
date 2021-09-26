const MoviesService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService
  .create({ title, directedBy, releaseYear });

  if (!movie) {
    return res
      .status(400)
      .json({ message: 'Dados inválidos' });
  }

  /*
    Perceba que `middlewares`, ao invés de executar um `return` padrão,
    como outras funções, vão, na maior parte das vezes, devolver as
    funções passadas por parâmetro, através dos objetos `req, res, next`.

    No nosso caso, estamos utilizando os métodos `status()` e `send()`,
    de `res` (response) para escrever/devolver um valor para a
    requisição daquele `end-point`.
  */
  return res
    .status(201)
    .json({ message: 'Filme criado com sucesso!' });
};

const getAll = async (req, res) => {
  const movies = await MoviesService.getAll();

  return res.status(200).json(movies);
}


const getById = async (req, res) => {
  const { id } = req.body;
  const movie = await MoviesService.getById(id);

  if (!movie) {
    return res
      .status(404)
      .json({ message: 'Não encontrado' });
  }

  return res.status(200).json(movie);
}

module.exports = {
  create,
  getAll,
  getById,
};