// Estes são os comandos para instalar os testes Jest

// 1- Criei ou esteja na pasta do projeto onde serão realizados os testes
// 2- No terminal, execute npm install - npm init -y
// 3- Edite o arq Json, alterando a parte para "test": "jest" <<< troque apenas essa parte
// 4- No terminal, execute npm install --save-dev jest
// 5- Cria um arquivo de teste: Para testar sua instalação, vamos criar um arquivo chamado sum.test.js e colar o código abaixo dentro dele:

// No arquivo da func: module.exports = algumNome => exporta p/quem quiser a func
// No arquivo de teste: const algumNome = require('./nomeDaFunc'); => traz a func para o arq test

describe('Requisito X', () => {
  it('A função recebe [1, 2, 3, 4, 5] e retorna true', () => {
    expected(true).toEqual(numeros([1, 2, 3, 4, 5]));
  });
});

// Este teste, irá testar a função Verificar Numeros do Conteúdo do course. Para aqui, é apenas base, já que essa função não existe neste arquivo

// Para realizar vários testes...
describe('Requisito X', () => {
  it(`A função recebe [1, 2, 3, '4', 5] e retorna false`, () => {
    expected(false).toEqual(numeros([1, 2, 3, 4, 5]));
  });
});

describe('Requisito X', () => {
  it(`A função recebe [' '] e retorna false`, () => {
    expected(false).toEqual(numeros([1, 2, 3, 4, 5]));
  });
});