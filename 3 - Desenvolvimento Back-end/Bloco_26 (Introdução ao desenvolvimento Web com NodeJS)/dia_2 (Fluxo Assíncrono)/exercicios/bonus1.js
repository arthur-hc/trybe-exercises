// 1 - Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
// 1.1 - Pergunte à pessoa usuária qual arquivo ela deseja ler.
// 1.2 - Leia o arquivo indicado.
// 1.3 - Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
// 1.4 - Caso o arquivo exista, escreva seu conteúdo na tela.

const { question } = require('readline-sync');
const fs = require('fs').promises;



const getFile = async () => {
  const fileName = question('Qual arquivo deseja ler? ');
  try {
    const response = await fs.readFile(fileName);
    const splitedFileName = fileName.split('.')
    const extension = (splitedFileName[splitedFileName.length -1])
    if(extension === 'json') {
      const fileContent = await JSON.parse(response);
      return console.log(fileContent);
    }
    const fileContent = await response.toString();
    console.log(fileContent);
  } catch (error) {
    console.log('Arquivo inexistente');
  }
}

getFile();