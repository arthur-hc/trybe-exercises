const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const { getAllBooks, getByAuthorId, isValid, createBook } = require('./models/books');

app.get('/books', async (_req, res) => {
  const allBooks = await getAllBooks();
  res.status(200).json(allBooks);
});

app.get('/books/authorid', async (req, res) => {
  const { id } = req.query;
  const booksById = await getByAuthorId(id);
  if(!booksById) return res.status(404).json({ message: 'Not Found'})
  res.status(200).json(booksById);
});
//  http://localhost:3000/books/authorid?id=2

app.get('/books/:authorid', async (req, res) => {
  const { authorid } = req.params
  const booksById = await getByAuthorId(authorid);
  if(!booksById) return res.status(404).json({ message: 'Not Found'})
  res.status(200).json(booksById);
});
//  http://localhost:3000/books/2

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  if(!isValid(title, author_id)) return res.status(400).json({ message: 'Dados inválidos' });
  try {
    const insertedBook = await createBook(title, author_id);
    res.status(201).json({ message: 'Livro criado com sucesso', livro: insertedBook });

  } catch (error) {
    console.log(error.message)
  }
  
});

app.listen(port, () => console.log(`Example app listening on port port!`));