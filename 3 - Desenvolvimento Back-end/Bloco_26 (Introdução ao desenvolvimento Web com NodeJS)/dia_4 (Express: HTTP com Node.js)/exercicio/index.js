const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const generateToken = require('./generateToken');
const fs = require('fs');
const app = express();
app.use(bodyParser.json());
app.use(cors());


// 1- Crie uma rota GET /ping
//Sua rota deve retornar o seguinte JSON: { message: 'pong' }
app.get('/ping', (req, res) => {
  const token = req.headers.authorization;
  if (!token ||  token.length !== 16) return res.status(401).json({message: 'Invalid Token!'})
  const msg = { message: 'pong' }
  res.status(200).json(msg);
});

// P/ testar com HTTPie no terminal (Com get é possível testar no navegador também)
// http GET :3001/ping
// http GET :3001/ping authorization:1234567891234567


// 2- Crie uma rota POST /hello
// Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } .
app.post('/hello', (req, res) => {
  const token = req.headers.authorization;
  if (!token ||  token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  const { name } = req.body;

  const msg = { message: `Hello, ${name}!` }

  res.status(200).json(msg);

});

// P/ testar com HTTPie no terminal
// http POST :3001/hello name='Arthur' authorization:1234567891234567


// 3- Crie uma rota POST /greetings
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .
app.post('/greetings', (req, res) => {
  const token = req.headers.authorization;
  if (!token ||  token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  const { name, age } = req.body;

  const authorizedMsg = { message: `Hello, ${name}!` };

  const UnauthorizedMsg = { message: `Unauthorized` };

  Number(age) > 17
  ? res.status(200).json(authorizedMsg)
  : res.status(401).json(UnauthorizedMsg);
});
// P/ testar com HTTPie no terminal
// SUCESSO: http POST :3001/greetings name='Arthur' age:=26 authorization:1234567891234567
// FALHA: http POST :3001/greetings name='Arthur' age:=17


// 4- Crie uma rota PUT /users/:name/:age .
// Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" } .
app.put('/users/:name/:age', (req, res) => {
  const token = req.headers.authorization;
  if (!token ||  token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});
  const { name, age } = req.params;

  const msg = { message: `Seu nome é ${name} e você tem ${age} anos de idade` };

  res.status(200).json(msg);
});

// P/ testar com HTTPie no terminal
// http PUT :3001/users/Arthur/26 authorization:1234567891234567


// 5- Crie uma API de dados das personagens de Simpsons que estará no arquivo simpsons.json
// Utilize o modulo fs do Node para ler/escrever arquivos.
// Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
// Caso dê tudo certo, a resposta deve voltar com status 200 OK .
// Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman , Insomnia ou httpie .

// 6- Crie um endpoint GET /simpsons
// O endpoint deve retornar um array com todos os simpsons.
app.get('/simpsons', (_req, res) => {
  const token = req.headers.authorization;
  if (!token ||  token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  const simpsons = require('./simpsons.json');
  res.status(200).json(simpsons);
});

// Para verificar o retorno:
// http GET :3001/simpsons authorization:1234567891234567

// 7- Crie um endpoint GET /simpsons/:id
// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .
app.get('/simpsons/:id', (req, res) => {
  const token = req.headers.authorization;
  if (!token ||  token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});
  const { id } = req.params;
  const simpsons = require('./simpsons.json');
  const character = simpsons.find((character) => character.id === id);
  
  if(!character) return res.status(404).json({ message: 'simpson not found' });

  res.status(200).json({character});
});

// Para verificar o retorno:
// http GET :3001/simpsons/1 authorization:1234567891234567 => RETORNA O HOMMER 
// http GET :3001/simpsons/999 authorization:1234567891234567 => RETORNA O NOT FOUND


// 8- Crie um endpoint POST /simpsons .
// Este endpoint deve cadastrar novos personagens.
// O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
// Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
// Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end();

app.post('/simpsons', (req, res) => {
  const token = req.headers.authorization;
  if (!token ||  token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  const { id, name } = req.body;
  const simpsons = require('./simpsons.json');
  const character = simpsons.find((character) => Number(character.id) === Number(id));
  
  if(!character) {
    const newArray = [...simpsons, { name, id }];
    fs.writeFileSync('./simpsons.json', JSON.stringify(newArray));
    return res.status(204).end();
  }

  res.status(409).json({ message: 'id already exists' });
});


// http POST :3001/simpsons id:=11 name='Arthur Simpson' authorization:1234567891234567
// http POST :3001/simpsons id:=1 name='Arthur Simpson' authorization:1234567891234567 => Irá falhar


// BÔNUS
// 1- Adicione autenticação a todos os endpoints.
// O token deve ser enviado através do header Authorization .
// O token deve ter exatamente 16 caracteres.
// Caso o token seja inválido ou inexistente, a resposta deve possuir o status 401 - Unauthorized e o JSON { message: 'Token inválido!' } .

// 2- Crie uma rota POST /signup
// A rota deve receber, no body da requisição, os campos email , password , firstName e phone .
// Caso algum dos campos não esteja preenchido, a response deve possuir status 401 - Unauthorized e o JSON { message: 'missing fields' } .
// Caso todos os parâmetros estejam presentes, a rota deve gerar um token aleatório válido, e a resposta deve conter o status 200 - OK , e o JSON { token: '<token-aleatorio>' } .

app.post('/signup', (req, res) => {
  const { email , password , firstName, phone} = req.body;
  if(!email || !password || !firstName || !phone) {
    return res.status(404).json({ message: 'missing fields' });
  };

  const token = generateToken();
  res.status(200).json({ token: token });
});

//http POST :3001/signup email='arthurhermann@hotmail.com' password:=123 firstName='arthur' phone:=3344445555 
//http POST :3001/signup email='arthurhermann@hotmail.com'

app.listen(3001, ()=> {
  console.log('Aplicação ouvindo na porta 3001 dia 5 index');
});