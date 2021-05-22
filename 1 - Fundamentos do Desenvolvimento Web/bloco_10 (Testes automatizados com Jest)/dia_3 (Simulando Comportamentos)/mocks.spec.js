// Mocks servem para garantir que o funcionamento está correto mesmo em comportamentos aleatórios ou quando a base de dados é muito grande e está o tempo se alterando
function retornaNumeroAleatorio () {
  Math.floor(Math.random() * 100)
};

const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

test('quando o número aleatório é par, a função retorna `true`', () => {
  retornaNumeroAleatorio = jest.fn().mockReturnValue(4) // IMPLEMENTE A SOLUÇÃO AQUI
  expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par? (INSERINDO MOCK)
});

// FUNÇÕES P/ ISSO:
// jest.fn();
// jest.mock();
// jest.spyOn(); 

// SOLUÇÃO C/ FN()
retornaNumeroAleatorio = jest.fn().mockReturnValueOnce(4)
retornaNumeroAleatorio = jest.fn().mockReturnValue(4)

// SOLUÇÃO C/ mockImplementation 
retornaNumeroAleatorio = jest.fn().mockImplementation(() => 4)

// Para verificar se a função foi chamada **PRECISAR TER USADO JEST.FN na func antes
expect(retornaNumeroAleatorio).toHaveBeenCalled();
expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(0);

// PARA MOCKAR UM ARQUIVO TODO
jest.mock('./arquivo') // TODAS AS FUNÇÕES E VALORES FICARÃO VAZIOS, SENDO NECESSÁRIO IMPLEMENTAÇÃO

// A spyOn() ESPIA A FUNC SIMULADA MAS DEIXA A IMPLEMENTAÇÃO ORIGANAL ATIVA
const func = jest.spyOn(arquivoDoRequire, "o que a func faz");

// LIMPA OS DADOS ENTRE DOIS EXPECTS
mock.mockClear()

// FAZ O MESMO QUE O CLEAR MAS REMOVE OS RESULTADOS ANTERIORES
mock.mockReset()

// RESTAURA A IMPLEMENTAÇÃO
mock.mockRestore()

// EXEMPLPO
const math = require('./math');

test("#somar", () => {
  // testando a implementação original, o mock e o mock resetado

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  math.somar = jest.fn().mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar(5, 1)).toBe(4);
  expect(math.somar).toHaveBeenCalledTimes(2);
  expect(math.somar).toHaveBeenLastCalledWith(5, 1);

  // resetando o mock
  math.somar.mockReset();
  expect(math.somar(1, 2)).toBe(undefined);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenLastCalledWith(1, 2);
});

// UTILIZANDO SPYON()
const math = require('./math');

test("#somar", () => {
  // testando a implementação original, o mock e a restauração da função original

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  const mockSomar = jest
    .spyOn(math, "somar")
    .mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

  // restaurando a implementação original
  math.somar.mockRestore();
  expect(math.somar(1, 2)).resolves.toBe(3);
});

//MOCKANDO API
const api = require("./api");

const requestReturn = [
  {
    id: "b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    name: "Spirit",
    classification: "Spirit",
    eye_colors: "Red",
    hair_colors: "Light Orange",
    url:
      "https://ghibliapi.herokuapp.com/species/b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    people: [
      "https://ghibliapi.herokuapp.com/people/ca568e87-4ce2-4afa-a6c5-51f4ae80a60b"
    ],
    films: [
      "https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6"
    ]
  }
];

test("testando requisição caso a promise resolva", async () => {
  apiURL = jest.fn().mockResolvedValue(requestReturn);

  // Mesma aplicação dos testes do exemplo anterior...
});