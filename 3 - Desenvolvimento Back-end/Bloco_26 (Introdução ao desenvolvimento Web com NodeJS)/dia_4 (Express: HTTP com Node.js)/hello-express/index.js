// // PARTE 1
// const express = require('express');

// // Criar uma nova aplicação Express;
// const app = express();

// // Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello , a função handleHelloWorldRequest deve ser chamada;
// app.get('/hello', handleHelloWorldRequest);

// // Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;
// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// });

// // Ao tratar uma requisição com método GET no caminho /hello , enviar o status HTTP 200 que significa OK e a mensagem "Hello world!".
// function handleHelloWorldRequest(req, res) {
//   res.status(200).send('Hello World!');
// }


// // // PARTE 2
// const express = require('express');

// // Criar uma nova aplicação Express;
// const app = express();

// // Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello , a função handleHelloWorldRequest deve ser chamada;
// app.get('/hello', handleHelloWorldRequest);

// // Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;
// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// });

// // Ao tratar uma requisição com método GET no caminho /hello , enviar o status HTTP 200 que significa OK e a mensagem "Hello world!".
// function handleHelloWorldRequest(req, res) {
//   res.status(200).send('Olá!');
// }

// // PARTE 3
// const express = require('express');
// const app = express();

// const recipes = [
//   { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
//   { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
//   { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
// ];

// app.get('/recipes', function (req, res) {
//   res.json(recipes);
// });

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// });

// // PARTE 2 + 3 + CORS
// const express = require('express');
// const app = express();
// const cors = require('cors');

// app.use(cors());

// app.get('/hello', handleHelloWorldRequest);

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// });

// function handleHelloWorldRequest(req, res) {
//   res.status(200).send('Olá!');
// }

// const recipes = [
//   { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
//   { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
//   { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
// ];

// app.get('/recipes', function (req, res) {
//   res.json(recipes);
// });

// // PARTE 4
// const express = require('express');
// const app = express();

// const recipes = [
//   { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
//   { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
//   { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
// ];

// app.get('/recipes', function (req, res) {
//  res.json(recipes);
// });

// app.get('/recipes/:id', function (req, res) {
//   const { id } = req.params;
//   const recipe = recipes.find((r) => r.id === parseInt(id));

//   if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

//   res.status(200).json(recipe);
// });

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// });

// PARTE 5
const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
 res.json(recipes);
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
})

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});