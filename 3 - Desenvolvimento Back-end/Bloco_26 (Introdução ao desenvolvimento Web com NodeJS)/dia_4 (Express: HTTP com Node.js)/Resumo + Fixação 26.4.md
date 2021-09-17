# Express: HTTP com Node.js

# HTTP
- Método de comunição entre servidores

# Exemplo:
GET / HTTP/1.1
Host: developer.mozilla.org
Accept: text/html

- GET => Método que busca algo no servidor

- / => É o caminho. Nesse caso a página inicial

- 1.1 => Versão do protocolo

- Host => Onde o recurso está tentando acessar, poderia seria localhost: 3000

# headers
- São informações adicionais a respeito de uma requisição ou resposta
Ex: {
  Accept: é o tipo de resposta esperada do servidor
  Host: informa o endereço do servido
  Tokens de autenticação: cliente informa ao servidor quem está tentando acessar o recurso
  etc...
}

# Métodos HTTP:
- São 39. Os mais comuns são:
[GET, PUT, POST, DELETE, PATCH]
*OPTIONS* também é conhecido por clientes para entender como deve ser a comunicação c/ servidor

- POST, PUT e Patch => carregam no body informações pro servidor. É nele que info de um forms são enviadas, por exemplo.

# Resposta do Servidor
- Ao receber uma requisição, o servidor envia de volta uma resposta
Ex:

HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (aqui vêm os 29769 bytes da página solicitada)

Informações: {
  Versão do protocolo: 1.1
  Cód Status: diz se foi sucesso ou não. No caso 200
  Headers: {
    Content-Type: diz p/ navegador o que fazer. No caso, renderizar o doc HTML na página
  }
  Body (opcional): Ex: caso envie um forms p/ registrar pedido, pode ser retornado o número do pedido
}

- Após a resposta, a conexão com o servidor é fechada ou guardada p/ novas requisições futuras

# Body e Header em Requisições VS Resposta

- REQUISIÇÕES: { Representam a informação que o cliente está enviado p/ servidor }
- RESPOSTA: { Representam a informação que o servidor está devolvendo p/ cliente }

*Body e Header vêm do gerador da ação. Clientes requerem, então envião info através deles. Servidores respondem. Então enviam info através deles*

# APIS (Application Programming Interface)
- Em suma, qualquer coisa que permita a comunicação programatica de uma aplicação

- Portanto, ela não se limita ao escopo web. MongoDB + Aggregation são um outro exemplo de API. Neste caso, o Mongo fica responsável pelo CRUD e o Aggregation pelo refinamento.

# API Rest
- É a forma de comunição p/ internet, que utiliza o padrão HTTP 1.1 => Traz mais semântica nos métodos

# Endpoint
- É a ponta que conecta o servidor com o cliente
- regras: {
  A (A-ddress): onde está hospedado
  B (B- inding): como pode acessar o dado
  C (C- ontract): o que vai conseguir/pode ver
}

# EXPRESS
- Ferramenta p/ criação de APIs HTTP com Node

=> Utilizando Express... (Os arquivos estarão nesse dia)
1 -
mkdir hello-express
cd hello-express
npm init -y

2 -
npm i express
touch index.js

3 - /index.js
const express = require('express');

// Criar uma nova aplicação Express;
const app = express();

// Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello , a função handleHelloWorldRequest deve ser chamada;
app.get('/hello', handleHelloWorldRequest);

// Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

// Ao tratar uma requisição com método GET no caminho /hello , enviar o status HTTP 200 que significa OK e a mensagem "Hello world!". O *req* é responsável por encapsular as informações de quem fez a requisição. Já o res é a resposta de volta
function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!');
}

4 -
Execute no terminal
node index.js

5 - 
No chrome http://localhost:3001/hello

6 -
P/ parar Ctrl+c no terminal

# Nodemon
- Após modificações, é necessário reiniciar a aplicação. Para facilitar o fluxo, o nodemon fica responsável pela tarega.
- npm i nodemon -D
- Adicionar em scripts "dev": "nodemon index.js"
- npm run dev

# Roteamento
- Determina um processo dada a rota.
app.METODO(caminho, callback)
A callback recebe 3 param ( request , response e next)

- request (req) => info do cliente p/ servidor
- response (res) => info do servidor p/ cliente
- next => Diz p/ express que a callback terminou a execução, podendo executar uma outra callback.(opcional)

const express = require('express');
const app = express();

/* Rota com caminho '/', utilizando o método GET */
app.get('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/', utilizando o método POST */
app.post('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/', utilizando o método PUT */
app.put('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/', utilizando o método DELETE */
app.delete('/', function (req, res) {
  res.send('hello world');
});

/* Rota com caminho '/' para qualquer método HTTP */
app.all('/', function (req, res) {
  res.send('hello world');
});

/* Ou podemos encadear as requisições para evitar repetir o caminho */
app
  .route('/')
  .get(function (req, res) {
        // Requisições para rota GET `/` são resolvidas aqui!
    res.send('hello world get');
  })
  .post(function (req, res) {
        // Requisições para rota POST `/` são resolvidas aqui!
    res.send('hello world post');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

# Estruturando uma API
- Esta aplicação permite o CRUD
/* index.js */
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

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

- Repare na mundança de SEND p/ JSON. Send é genérico.

- NEM TODA REQ HTTP pode ser feita pelo navegador. Por isso, recomenda-se Postman e Insomnia. Também e pode utilizar o comando httpie. 

# Rodando no terminal via httpie
- http :3001/recipes => IRÁ RETORNAR O DOC

- Esse JSON retornado, poderia ser utilizado em aplicações Front-end
fetch('http://localhost:3001/recipes')
    .then(resp => resp.json())

# Acesso ao back
- P/ o back receber a req do front, é necessário i o módulo p/ liberar o acesso.
- npm i cors
- Adicionar ao index.js
  const cors = require('cors');
  app.use(cors());

# Pamatros de rota
/<rota>/<:parametro>

- O :parametro é utilizado para determinar o retorno das informações. No código a seguir, quando recepe um parametro, no caso id, ele faz uma busca no banco de dados, caso não exista, retorna status 404 c/ mensagem, caso exista, retorna a receita. Perceba que o parametro req, traz informações sobre a requisição. Além disso, é importante a existência do return, para parar o fluxo caso a condição seja satisfeita, evitando a quebra por duas respostas. Esse req não trata a chance de erro, caso receba letras, por exemplo. 

// const express = require('express');
// const app = express();
// 
// const recipes = [
//   { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
//   { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
//   { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
// ];
// 
// app.get('/recipes', function (req, res) {
//  res.json(recipes);
// });

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// });

# Query String
- Outra forma de passar param para busca
"/produtos?q=Geladeira&precoMaximo=2000"

q = Geladeira
precoMaximo = 2000

app.get('/recipes/search', function (req, res) {
  const { name } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name));
  res.status(200).json(filteredRecipes);
});

- A query começara após o ? ('/search?')
- Seguem o padrão chave = valor (name = 'Macarrao')
- São separados por & ('/search?name=macarrao&outrachave=outrovalor')
- Query String devem vir antes da com parametros, caso contrário, o express pode entender como um param

- Adicionando outra query, preco maximo
app.get('/recipes/search', function (req, res) {
    const { name, maxPrice } = req.query;
    const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
    res.status(200).json(filteredRecipes);
})

# Recebendo dados no body
- Não seria nada prudente receber dados sensíveis como senho via url. Para isso, utilza-se o corpo da requisitação, comprimindo, para somente no back e eles sejam descomprimidos. Para enviar dados no body, geralmente se utiliza de métodos mais específicos, como POST

- * Instalando bodyParser *
- npm i body-parser

- index.js (inserir)
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});

- Perceba que utilza uma rota já existente, porém, por ser outro método, não há problema. Porém, para acessá-lo, será utilizado outro método:
  fetch(`http://localhost:3001/recipes/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: 4,
      title: 'Macarrão com Frango',
      price: 30
    })
  });

- Essa operação não é possível direto do navegador. Deve-se utilizar Insomnia ou Postman
- Através do HTTPie: *** := envia como number || = envia como string ***
http POST :3001/recipes id:=4 name='Macarrão com Frango' price:=30 // execute apenas essa linha!
> HTTP/1.1 201 Created
> Connection: keep-alive
> Content-Length: 32
> Content-Type: application/json; charset=utf-8
> Date: Sat, 21 Aug 2021 19:26:46 GMT
> ETag: W/"20-bnfMbzwQ0XaOf5RuS+0mkUwjAeU"
> Keep-Alive: timeout=5
> X-Powered-By: Express
> 
> {
>     "message": "Recipe created successfully!"
> }

*** Utilizando os Headers ***
- Similar ao body, mas perceba que agora utiliza-se : para definir o valor do atributo

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'})';

  res.status(200).json({message: 'Valid Token!'})'
});

// No HTTPie
http :3001/validateToken Authorization:abc # vai devolver token inválido
http :3001/validateToken Authorization:S6xEzQUTypw4aj5A # vai devolver token válido

# PUT(editar) E DELETE(deletar AH VÁ)

*** PUT ***
- Observe a mudança no status e .end(); que indica que vai ser retornado sem nenhuma informação

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

- Fazendo a requisição com HTTPie
http PUT :3001 /recipes/2 name='Macarrão ao alho e óleo' price:=40 # execute apenas essa linha!
> HTTP/1.1 204 No Content
> Connection: keep-alive
> Date: Fri, 20 Aug 2021 22:19:35 GMT
> ETag: W/"25-ySvLeHwVHESCh2r//vitH6caTaI"
> Keep-Alive: timeout=5
> X-Powered-By: Express

*** DELETE ***
app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

- Fazendo a requisição com HTTPie
http DELETE :3001 /recipes/3 # execute apenas essa linha!
> HTTP/1.1 204 No Content
> Connection: keep-alive
> Date: Fri, 20 Aug 2021 22:25:44 GMT
> ETag: W/"23-nD7qnlOhswfi0qOrye68khRdynU"
> Keep-Alive: timeout=5
> X-Powered-By: Express

# PARA RETORNAR UMA ROTA NÃO MAPEADA
app.all('*', function (req, res) {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001);

- O * é a resposta coringa que pega qualquer rota que chegue ali, retornando 404. Por isso, DEVE ESTAR SEMPRE NA ÚLTIMA POSIÇÃO

