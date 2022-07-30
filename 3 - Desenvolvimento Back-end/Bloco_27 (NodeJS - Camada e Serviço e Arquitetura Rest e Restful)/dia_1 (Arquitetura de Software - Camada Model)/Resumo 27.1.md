# ARQUITETURA MSC - CAMADA MODEL
- Camada Movel => Arquivos onde executa as op do db, como conexões e execução de queries
- Camada Serviço => Arquivos onde estrutura as regras de negócio
- Camada de Controladores => Mais próxima do user ou req. Processa e chama as func de c. serviço

- Controller => Service => Model => DB

# CAMADA MODEL
- Acesso aos dados passam por essa camada. Somente ela saberá se há um db, se é MySQL ou Mongo, etc. 
- Nela é feita a validação
- É desacoplado das outras camadas p/ melhor manutenção, assim alterações em outras, não afetam
- Também permite a reutilização de código

# MODEL COM MYSQL
- mkdir model-example-mysql
- cd model-example-mysql
- npm init -y
- npm i mysql2
- O restante estará nas pastas models ou arquivo index.js

*** A estrutura de requisição do endpoint, permanece a mesma ***
- porém precisa importar as funções para requisição

// index.js
const express = require('express')
const app = express()
const port = 3000

const { getAllBooks, getByAuthorId } = require('./models/books');

app.get('/books/authorid', async (req, res) => {
  const { id } = req.query;
  const booksById = await getByAuthorId(id);
  if(!booksById) return res.status(404).json({ message: 'Not Found'})
  res.status(200).json(booksById);
});

app.listen(port, () => console.log(`Example app listening on port port!`));

*** Cria um diretório models ***
// ARQUIVO P/ CRIAR CONEXÃO
// connection.js
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'arthur-hc',
  password: 'trybe12345',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;

// books.js
const connection = require('./connection');

const serialize = (bookData) => {
  return {
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id,
  }
};

const getAllBooks = async () => {
  const [books] = await connection.execute('SELECT * FROM books');

  return books;
};

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(`SELECT * FROM books WHERE author_id=?`,[id]);

  if(books.length === 0) return null;

  return books.map(serialize);
}

module.exports = {
  getAllBooks,
  getByAuthorId,
};


# CRIANDO UM NOVO ESCRITOR


//author.js
- Criar uma função de validação

const isValid = { first_name, middle_name, last_name } => {
  if(!first_name || typeof first_name !== 'string') return false;
  if(!last_name || typeof last_name !== 'string') return false;

  return true
};

const create = async(first_name, middle_name, last_name) => connection.execute('INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES(?, ?, ?)',
[first_name, middle_name, last_name]
);

- adicionar exportação

module.expors = {
  anteriores...
  isValid,
  create,
}

//index.js

- importar body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  if(!author.isValid(first_name, middle_name, last_name)) return res.status(400).json({ message: 'Dados inválidos' });

  await author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso' })
});

# MODEL COM MONGODB
- Trocar o mysql2 por mongodb
npm i mongodb

- As principais diferenças em relação ao MySQL estarão no connection.js e nas funções de ligação que estarão em books ou authors

//connection.js
const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = () => {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db('model_example');
    return db;
    })
};

module.exports = connection;