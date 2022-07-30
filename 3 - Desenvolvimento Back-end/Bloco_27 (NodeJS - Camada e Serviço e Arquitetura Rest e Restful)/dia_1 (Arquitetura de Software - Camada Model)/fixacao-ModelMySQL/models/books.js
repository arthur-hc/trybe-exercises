// COM MYSQL
// const connection = require('./connection');

// const serialize = (bookData) => {
//   return {
//     id: bookData.id,
//     title: bookData.title,
//     authorId: bookData.author_id,
//   }
// };

// const getAllBooks = async () => {
//   const [books] = await connection.execute('SELECT * FROM books');

//   return books;
// };

// const getByAuthorId = async (id) => {
//   // OS DOIS MÉTODOS FUNCIONAM
//   const [books] = await connection.execute(`SELECT * FROM books WHERE author_id=?`,[id]);

//   if(books.length === 0) return null;

//   return books.map(serialize);
// }

// const isValid = (title, author_id) => {
//   if(!title || typeof title !== 'string') return false;
//   if(!author_id) return false;

//   return true;
// }

// const createBook = async (title, author_id) => connection.execute('INSERT INTO model_example.books (title, author_id) VALUES(?, ?)',
// [title, author_id]
// );

// module.exports = {
//   getAllBooks,
//   getByAuthorId,
//   isValid,
//   createBook,
// };


// COM MONGODB
const connection = require('./connection');

const { ObjectId } = require('mongodb')

const serialize = (bookData) => {
  return {
    id: bookData._id,
    title: bookData.title,
    authorId: bookData.author_id,
  }
};

const getAllBooks = async () => {
  const db = await connection();
  const books = await db.collection('books').find().toArray();
  return books.map(serialize);
}

const getByAuthorId = async (id) => {
  const db = await connection();
  const books = await db.collection('books').findOne(new ObjectId(id));
  if(!books) return null;
  return serialize(books);
}

const isValid = (title, author_id) => {
  if(!title || typeof title !== 'string') return false;
  if(!author_id) return false;

  return true;
}

const createBook = async (title, author_id) => {
  const db = await connection();
  const insertedBook = await db.collection('books').insertOne({ title, author_id });
  return await getByAuthorId(insertedBook.insertedId)
};

module.exports = {
  getAllBooks,
  getByAuthorId,
  isValid,
  createBook,
};