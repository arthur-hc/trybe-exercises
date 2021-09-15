const fs = require('fs').promises;

// 4.1 - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
const readFile = async () => {
  try {
    const response = await fs.readFile('./simpsons.json');
    const obj = await JSON.parse(response);
    obj.map(({id, name}) => console.log(`${id} - ${name}`))
  } catch (error) {
    console.log(error)
  }
}

// readFile();

// 4.2 - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
// const getChar = async (idToFind) => {
//   const response = await fs.readFile('./simpsons.json');
//   const obj = JSON.parse(response);
//   const char = obj.find(({id}) => id === idToFind);
//   const promise = new Promise((resolve, reject) => {
//     if(!char) reject(new Error ('id não encontrado'))
//     console.log(char)
//     resolve(char);
//   })
//   return promise;
// };

// getChar('1');

// GABARITO (NÃO É NECESSÁRIO A NEW PROMISE)
const getChar = async (idToFind) => {
  const response = await fs.readFile('./simpsons.json');
  const obj = JSON.parse(response);
  const char = obj.find(({id}) => id === idToFind);
  if(!char) throw new Error ('id não encontrado')
  console.log(char)
  return char;
};

// getChar('1');

// 4.3 - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
const delete10and6 = async () => {
  try {
    const response = await fs.readFile('./simpsons.json');
    const obj = JSON.parse(response);
    const newArray = obj.filter(({id}) => id !== '10' && id !== '6')
    await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
    console.log('Arquivo escrito com sucesso!');
  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${error.message}`);
  }
}

// delete10and6();

// 4.4 - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
const createSimpsonFamily = async () => {
  try {
    const response = await fs.readFile('./simpsons.json');
    const obj = JSON.parse(response);
    const newArray = obj.filter(({id}) => Number(id) <= 4)
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray));
    console.log('Arquivo escrito com sucesso!');
  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${error.message}`);
  }
}

// createSimpsonFamily();

// 4.5 - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
const addNelsonToSimpsonFamily = async () => {
  try {
    const response = await fs.readFile('./simpsonFamily.json');
    const obj = JSON.parse(response);
    const id = String(Number(obj[obj.length - 1].id) + 1);
    const nelson = { id, name: 'Nelson Muntz' };
    const newArray = [...obj, nelson];
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray));
    console.log('Arquivo escrito com sucesso!');
  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${error.message}`);
  }
}

// addNelsonToSimpsonFamily();

// 4.6 - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
const changeNelsonForMaggie = async () => {
  try {
    const response = await fs.readFile('./simpsonFamily.json');
    const obj = JSON.parse(response);
    const newArray = obj.map((char) => {
      if(char.name === 'Nelson Muntz') {
        return {...char, name: 'Maggie Simpson'}
      }
      return char
    });
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newArray));
    console.log('Arquivo escrito com sucesso!');
  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${error.message}`);
  }
}
changeNelsonForMaggie();