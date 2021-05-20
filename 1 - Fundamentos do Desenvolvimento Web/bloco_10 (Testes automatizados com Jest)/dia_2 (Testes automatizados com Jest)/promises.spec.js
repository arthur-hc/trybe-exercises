const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

describe('Testes com then/catch', () => {
  test('Retorne a lista de animais', () => { // PARA PEGAR O ACERTO (THEN e CATCH)
    expect.assertions(2);
    return getListAnimals('Dog').then(listDogs => { // LEMBRAR DO RETURN PARA EVITAR FALSO POSITIVO
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    })
  })
  // TESTANDO O ERRO
  test('Retorne o erro', () => {
    expect.assertions(1); // ASSERTIONS TAMBÉM EVITAM FALSOS POSITIVOS. expect.hasAssertions() também
    return getListAnimals('Cavalo').catch(error => {
      expect(error).toEqual({ error: 'Não possui esse tipo de animal.' })
    })
  })
})

// COM ASYNC (AWAIT E TRY CATCH)
describe('Testes com async', () => {
  test('Retorna a lista de animais', async () => { // ASYNC ANTES DA CALLBACK DO TEST
    expect.assertions(2); // EVITA FALSOS POSITIVOS
    const listDogs = await getListAnimals('Dog'); // ESPERA A FUNÇÃO ASYNC
    expect(listDogs[0].name).toEqual('Dorminhoco');
    expect(listDogs[1].name).toEqual('Soneca');
  })
  test('Retorne o erro', async () => {
    expect.assertions(1);
    try { // TENTARÁ A NORMAL
      await getListAnimals('Lion') // ESPERA EXECUÇÃO
    } catch (error) { // PEGA O ERRO PARA VERIFICAR
      expect(error).toEqual({ error: 'Não possui esse tipo de animal.' })
    }
  })
})



// COM .RESOLVES E .REJECTS ()
// AO INVÉS DO THEN, UTILIZA RESOLVES P/ SUCESSO **MANTÉM O RETURN**
describe('Testando promise - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ]
      expect.assertions(1);
      return expect(getListAnimals('Dog')).resolves.toEqual(listDogs)
    });
  });
// AO INVÉS DO CATCH, UTILIZA REJECTS P/ ERROS **MANTÉM O RETURN**
  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' })
    });
  });
});

// COM .RESOLVES E .REJECTS () E ASYNC
// AWAIT PASSA A SER ANTES DO EXPECT E ASYNC ANTES DA CALLBACK
describe('Testando promise - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', async () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ]
      expect.assertions(1);
      await expect(getListAnimals('Dog')).resolves.toEqual(listDogs)
    });
  });
// REMOVE O TRY CATCH E UTILIZA-SE O MESMO MODO, APENAS COM AWAIT ANTES DO EXPECT
  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      await expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' })
    });
  });
});
