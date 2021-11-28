const express = require('express');
const { book } = require('../models');
const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const books = await book.findAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const bookById = await book.findByPk(id);

    if (!bookById) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(bookById);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método create do Sequelize para salvar um livro no banco.
router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await book.create({ title, author, pageQuantity});

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await book.destroy(
      { where: { id } },
    );

    return res.status(200).json({ message: 'Livro excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const { id } =  req.params;

    const result = await book.update(
      {
        title,
        author,
        pageQuantity,
      },
      { where: { id } },
    );

    return res.status(200).json({ message: 'Livro Atualizado' });
  } catch (err) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;