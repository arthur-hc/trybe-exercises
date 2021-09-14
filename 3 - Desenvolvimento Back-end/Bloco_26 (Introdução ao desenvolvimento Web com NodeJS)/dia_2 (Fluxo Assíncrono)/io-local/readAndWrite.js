const fs = require('fs').promises;
const nomeDoArquivo = 'meu-arquivo.txt';
let text;
fs.readFile(nomeDoArquivo, 'utf8')
  .then((data) => {
    console.log(`Conteúdo do arquivo antes da escrita: ${data}`);
    text = data;
  })
  .then(() => {
    fs.writeFile('./meu-arquivo.txt', `${text} Legal, né? #VQV`)
      .then(() => {
        console.log('Arquivo escrito com sucesso!');
      })
  })
  .then(() => {
    fs.readFile(nomeDoArquivo, 'utf8')
      .then((data) => {
        console.log(`Conteúdo do arquivo depois da escrita: ${data}`);
      });
  })
  .catch((err) => {
    console.error(`Não foi possível ler ou escrever o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  });