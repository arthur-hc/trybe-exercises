// 2 - Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:
// 2.1 - Pergunte à pessoa usuária qual arquivo ela deseja utilizar.
// 2.2 - Leia o arquivo.
// 2.3 - Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
// 2.4 - Caso o arquivo exista, solicite a palavra a ser substituída.
// 2.5 - Solicite a nova palavra, que substituirá a palavra anterior.
// 2.5 - Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
// 2.6 - Pergunte o nome do arquivo de destino.
// 2.7 - Salve o novo arquivo no caminho de destino.
// Dica: Utilize a classe RegExp do JS para substituir todas as ocorrências da palavra com replace(new RegExp(palavra, 'g'), novaPalavra) .

// SE TIVESSE SIDO UTILIZADO 'utf-8' COMO SEGUNDO PARAMETRO EM readFile, NÃO SERIA NECESSÁRIO O .toString();

const { question } = require('readline-sync');
const fs = require('fs').promises;

const getFile = async () => {
  const fileName = question('Qual arquivo deseja ler? ');
  try {
    const AllFiles = await fs.readdir('./');
    const queryResult = AllFiles.filter((file) => file.includes(fileName));
    if(queryResult.length === 0) throw new Error('Arquivo inexistente')
    
    let fileToSearch;
    if(queryResult.length > 1) {
      console.log(queryResult)
      const newQuery = question('Foi encontrado mais de um arquivo. Qual arquivo deseja ler? ');
      fileToSearch = queryResult.filter((file) => file.includes(newQuery))[0];
    } else {
      fileToSearch = queryResult[0]
    }
    const response = await fs.readFile(fileToSearch);
    let responseToChange;

    const splitedFileName = queryResult[0].split('.')
    const extension = (splitedFileName[splitedFileName.length -1])
    if(extension === 'json') {
      const fileContent = await JSON.parse(response);
      console.log(fileContent);
      responseToChange = response
    } else {
      const fileContent = await response.toString();
      console.log(fileContent);
      responseToChange = fileContent
    }
    
    const wantReplaceWords = question('Deseja substituir alguma palavra?(S/N) ');
    if(wantReplaceWords.toUpperCase() === 'N') return console.log('Até a próxima');
    if(wantReplaceWords.toUpperCase() !== 'S') return console.log('Resposta inválida. Até a próxima');
    
    const wordToBeReplaced = question('Deseja substituir qual palavra? ');
    const wordToReplace = question('E por qual palavra deseja substituir? ');

    const newText = responseToChange.replace(new RegExp(wordToBeReplaced, 'g'), wordToReplace);
    console.log(`Conteúdo após modificações:
    
    ${newText}`);

    const nameToSave = question('Qual o nome desejado para salvar?(Caso já exista, irá substituir. A extensão será a mesma que a original) ');
    if(nameToSave.split('').length < 1) return console.log('Resposta inválida. Até a próxima');
    await fs.writeFile(`${nameToSave}.${extension}`, JSON.stringify(newText));
    return console.log('Arquivo salvo com sucesso!');

  } catch (error) {
    console.log('Arquivo inexistente');
  }
}

getFile();