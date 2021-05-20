const fetch = require('node-fetch');

// COM THEN/CATCH
const getReposTC = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

// COM ASYNC/AWAIT
const getRepos = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json()
    console.log(data.map((repo) => repo.name))
  } catch (error) {
    return error
  }
}

getRepos('https://api.github.com/orgs/tryber/repos')

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.name === name);
      if(arrayAnimals.length > 0) {
        return resolve (arrayAnimals)
      }
      return reject({ error: 'Não possui esse tipo de animal.'})
    }, 100);
  })
);

const getAnimal = async (name) => {
  // Adicione o código aqui.
  try {
    const animal = await findAnimalByName(name);
    console.log(animal);
  } catch (error) {
    console.log(error);
  }
};

getAnimal('Bob')