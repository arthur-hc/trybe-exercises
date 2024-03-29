// SÃO FUNÇÕES PARA SETAR ANTES OU DEPOIS DA EXECUÇÃO DE UM CÓDIGO DURANTE UMA BATERIA DE TESTES
// EX: DURANTE A BATERIA É ADICIONADO UM POKEMON AO ARRAY. PARA QUE ESSE POKEMON NÃO FIQUE E AFETE OS OUTROS TESTES, UTILIZA-SE beforeEach() ou afterEach() PARA "RESETAR" AO MODELO DESEJADO

beforeEach(() => {
  arrayOriginal; //Toda vez, ANTES de executar testes, o arrayOriginal voltará para sua forma original
});

afterEach(() => {
  arrayResult; // Toda vez, APÓS a execução dos testes, o arrayResults voltará para sua forma original
});

// OS ESCOPOS DESSAS FUNÇÕES SERÃO LIMITADAS PELO DESCRIBE

// Este beforeEach e este afterEach serão aplicados a todos os testes
beforeEach(() => {
  retrieveCitiesFromCache();
});

afterEach(() => {
  resetCities();
});

it("should have only 1 city after remove Belo Horizonte", () => {
  removeCity("Belo Horizonte");
  expect(getCities().length).toBe(1);
});

it("should have the city of Belo Horizonte", () => {
  expect(isCity("Belo Horizonte")).toBeTruthy();
});

describe('Requesting cities from api', () => {
  // Este beforeEach e este afterEach serão aplicados apenas aos testes
  // do bloco do describe
  beforeEach(() => {
    return requestCities();
  });

  afterEach(() => {
    resetCities();
  });

  it("should have 8 cities after request", () => {
    let cities = getCities();
    expect(cities.length).toBe(8);
  });

  it("should have the city of Belo Horizonte", () => {
    expect(isCity("Belo Horizonte")).toBeTruthy();
  });

  it("should have the city of Fortaleza", () => {
    expect(isCity("Fortaleza")).toBeTruthy();
  });
});