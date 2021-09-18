# 26.5 - Middlewares
- No express, qualquer função passada para uma rota, é um middleware, isto é, qualquer função que realiza o tratamento de uma req e que pode encerrar ou chamar um próximo.

*** Sequencia ***
- 1 - Faz a validação, caso seja negada, retorna erro e encerra. caso seja positiva, chama next()
- 2 - Next, faz com que a segunda func seja chamada. Caso não existisse o next, pararia ali.
// ...
app.post('/recipes', 
function (req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'}); // 1

  next(); // 2
},
function (req, res) { // 3
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});
// ...

# Economia de código
- Perceba como a função de validação foi reutilizada
// ...
function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

  next(); 
};

app.post('/recipes', validateName, function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', validateName, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipesIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipesIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };

  res.status(204).end();
});
// ...


# Autenticação
- Primeiro cria um arquivo para autenticar ((auth-middleware.js))

// no index.js
const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');

const app = express();
app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
  res.send('open!')
});

app.use(authMiddleware);

- Perceba que app.use está depois da rota /open pois é uma página que não necessita de verificação. Nas páginas seguintes, será feito a validação

# Middleware modificando obj req

- Agora a autenticação, faz validação de um username e senha
- Mas perceba que no req, um novo atributo é escrito, o user. ***CUIDADO P/ NÃO SOBRESCREVER (req.queyr || req.headers || req.body, req.params...)

/* auth-middleware.js */
const validUsers = [
  { username: 'MestreCuca', password: 'MinhaSenhaSuperSeguraSqn' },
  { username: 'McRonald', password: 'Senha123Mudar' },
  { username: 'Burger Queen', password: 'Senha123Mudar' },
  { username: 'UpWay', password: 'Senha123Mudar' },
];

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username && !password) {
    return res.status(401).json({ message: 'Username and password can`t be blank!' });
  }

  const foundUser = validUsers.find((user) => user.username === username);

  if (!foundUser) return res.status(401).json({ message: 'Invalid credentials!' });

  if (!(username === foundUser.username  && password === foundUser.password)) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  req.user = foundUser; // Aqui estamos passando o usuário encontrado para o próximo middleware.

  next();
};

module.exports = authMiddleware;

- *AGORA, É POSSÍVEL ACESSAR AS INFORMAÇÕES DO USER*

app.use(authMiddleware);

app.post('/recipes', validateName, function (req, res) {
  const { id, name, price } = req.body;
  const { username } = req.user; // Aqui estamos acessando o usuário encontrado no middleware de autenticação.
  recipes.push({ id, name, price, chef: username });
  res.status(201).json({ message: 'Recipe created successfully!'});
});

# Router middleware
- Evitando um enormente arquivo, o router agrupa várias rotas em um mesmo lugar

***/* recipesRouter.js */ ***
const express = require('express');
const router = express.Router();

const recipes = [
  { id: 1, name: 'Lasanha', preco: 40.0, tempoDePreparo: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', preco: 35.0, tempoDePreparo: 25 },
  { id: 3, name: 'Macarrão com molho branco', preco: 35.0, tempoDePreparo: 25 },
];

function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

  next(); 
};

router.get('/', function (req, res) {
  res.status(200).json(recipes);
});

router.get('/pesquisar', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.preco < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});

router.get('/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

router.post('/', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

router.put('/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(500).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

router.delete('/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(500).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

module.exports = router;

***/* index.js */ ***
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
  res.send('open!')
});

app.use(authMiddleware);

const recipesRouter = require('./recipesRouter');

/* Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/recipes', recipesRouter);

// app.all('*', function (req, res) {
//  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
// });

app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });

*** observações ***
- Repare no app.use('/recipes', recipesRouter), é ele o responsável por ligar. Repare também, que no router da /recipes, para dar rotas, não é repetido o recipes. Isso porque o express já pressuõe aquela rota, por ex: /:id, mas na verdade será acionado como /recipes/:id

# Middleware p/ erros

app.use(middleware1);
app.get('/', */ ... */);
app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

- RESSALVAS:
  => Sempre depois de rotas e outros mids
  => Sempre com 4 params

- Repare que com next(err), o express não irá executar nada além do erro
  app.use(function logErrors(err, req, res, next) {
  console.error(err.stack);
  /* passa o erro para o próximo middleware */
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(500);
  res.json({ error: err });
});

- EXEMPLO DE CAPTURA DO ERRO QUE EVITA A APLICAÇÃO FICAR "FLUTUANDO"


# TRATANDO ERROS COM RESCUE
-  npm i express-rescue

- NO EXEMPLO, QAULQUER ERRO SERÁ CAPTURADO PELO RESCUE E PASSADO PARA O MID DE ERRO
/* errorHandlerExample.js */
const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');

const app = express();

app.get(
  '/:fileName',
  rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  })
);

app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });
});

app.listen(3002);

- COSTUMA-SE CRIAR UM MIDDLE QUE CONVERTE ERROS PARA FORMATO GENERICO
/* errorMiddleware.js */

module.exports = (err, req, res, next) => {
  if (err.code && err.status) {
    return res.status(err.status).json({ message: err.message, code: err.code });
  }

  return res.status(500).json({ message: err.message });
}

- NESTE CÓDIGO, O ERRO DE LEITURA DE UM ARQUIVO É CONVERTIDO P/ QUE O MIDD DE ERRO POSSA FORMATAR. ASSIM, NOS PREOCUPAMOS APENAS COM CAMINHO FELIZ E OS MID DE ERRO TRATAM ESSE OUTRO FLUXO
- REPARE TAMBÉM QUE É UTILIZADO ARRAY P/ PASSAR MAIS DE UM MID P/ UMA ROTA. NÃO É OBRIGATÓRIO, MAS DEIXA MAIS EXPLICITO.
/* index.js */
const express = require('express');
const rescue = require('express-rescue');
const errorMiddleware = require('./errorMiddleware');

const app = express();

app.get('/:fileName', [
  rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  })
  (err, req, res, next) => {
    if (err.code ==- 'ENOENT') {
      const newError = new Error(err.message);
      newError.code = 'file_not_found';
      newError.status = 404;
      return next(newError);
    }

    return next(err);
  },
]);

app.use(errorMiddleware);

*** SEMPRE QUE FOR UTILIZADO next(QUALQUERCOISA) => será jogado para o tratamento de erro mais próximo.
Esse next pode ser utilizado em um try/catch também