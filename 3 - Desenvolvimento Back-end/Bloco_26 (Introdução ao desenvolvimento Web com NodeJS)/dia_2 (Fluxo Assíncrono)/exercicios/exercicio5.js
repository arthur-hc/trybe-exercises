const fs = require('fs').promises;

// 5 - Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
//  5.1 - Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
//  5.2 - Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .
const createFiles = async () => {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  try {
    const promises = strings.map(async (string, index) => {
      await fs.writeFile(`./file${index + 1}.txt`, string);
      console.log('Arquivos escritos com sucesso!');
    })
    const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];
    const allContent = await Promise.all(files.map((fileName) => fs.readFile(fileName, 'utf-8')));
    const newFile = allContent.join(' ');
    await fs.writeFile('./fileAll.txt', newFile);
    console.log('Arquivo escrito com sucesso!');
  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${error.message}`);
  }
}

createFiles();

//  5.3 - Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt .
// O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all !!! .

