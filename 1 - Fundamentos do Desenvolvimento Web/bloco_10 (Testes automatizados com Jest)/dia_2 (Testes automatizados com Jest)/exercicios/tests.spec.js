const { uppercase, getUserName, getRepos } = require('./functions')

describe('Testes exercicio 1', () => {
  it('exercicio 1', () => {
    uppercase('Olá', (word) => {
      expect.assertions(1);
      expect(word).toEqual('OLÁ');
    })
  })
})

describe('Testes exercicios 2 e 3', () => {
  it('exercicio 2 - Espera o retorno `Mark`', () => {
    expect.assertions(1);
    return expect(getUserName(4)).resolves.toEqual('Mark');
  })
  it('exercicio 2 - Espero um erro', () => {
    expect.assertions(1);
    return expect(getUserName(1)).rejects.toEqual({ error: 'User with 1 not found.' })
  })
  // AGORA COM ASYNC E AWAIT
  it('Espera `Mark`', async () => {
    expect.assertions(1);
    await expect(getUserName(4)).resolves.toEqual('Mark');
  })
  it('Espera um erro', async () => {
    expect.assertions(1);
    await expect(getUserName(1)).rejects.toEqual({ error: 'User with 1 not found.' })
  })
  // SEM RESOLVES/REJECTS
  // COM THEN/CATCH
  it('Espera Paul', () => {
    expect.assertions(1);
    return getUserName(5).then(name => {
      expect(name).toEqual('Paul')
    })
  })
  it('Espera Erro', () => {
    expect.assertions(1);
    return getUserName(2).catch(error => {
      expect(error).toEqual({ error: 'User with 2 not found.' })
    })
  })
  
  // COM ASYNC/AWAIT/TRY CATCH
  it('Espera Mark', async () => {
    expect.assertions(1);
    const name = await getUserName(4);
    expect(name).toEqual('Mark');
  })
  it('Espera Erro', async () => {
    expect.assertions(1);
    try {
      await getUserName(1);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 1 not found.' })
    }
  })
})

describe('teste exercicio 4', () => {
  const url = 'https://api.github.com/orgs/tryber/repos';
  it('testes com then', () => {
    expect.assertions(2);
    return getRepos(url).then(list => {
      expect(list).toContain('sd-01-week4-5-project-todo-list');
      expect(list).toContain('sd-01-week4-5-project-meme-generator');
    })
  });
  it('testes com async,', async () => {
    expect.assertions(2)
    const list = await getRepos(url)
    expect(list).toContain('sd-01-week4-5-project-todo-list');
    expect(list).toContain('sd-01-week4-5-project-meme-generator');
  })
})


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<EXERCICIO 6>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalFound = Animals.find((animal) => animal.name === name);
      if(animalFound) {
        return resolve (animalFound)
      };
      return reject('Nenhum animal com esse nome!')
    }, 100);
  })
);

const getAnimal = async (name) => {
  // Adicione o código aqui.
    const animal = await findAnimalByName(name);
    return animal
};

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});