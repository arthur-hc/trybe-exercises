### Resumo + Fixação 26.2 ###

# Tratando erros de forma síncrona
function dividirNumeros(num1, num2) {
  if (num2 == 0) throw new Error("Não pode ser feito uma divisão por zero");

  return num1 / num2;
}

try {
  const resultado = dividirNumeros(2, 1);
  console.log(`resultado: ${resultado}`);
} catch (e) {
  console.log(e.message);
}

# Tratando erros de forma assíncrona
function dividirNumeros(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error("Não pode ser feito uma divisão por zero"));

    const resultado = num1 / num2;
    resolve(resultado)
  });

  return promise;
}

dividirNumeros(2, 1)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));

# Criando uma Promise
const p = new Promise((resolve, reject) => {
  <!-- AQUI ESTARÁ A LÓGICA P/ TENTAR CUMPRIR A PROMISE -->
};

# Função que resolve a Promise
const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });

  });
}
<!-- fs É O MÓDULO NATIVO DO NODE P/ LEITURA DESSE ARQUIVO -->

# Consumindo a promise
readFilePromise('./file.txt') // A função me promete que vai ler o arquivo
  .then((content) => { // Caso ela cumpra o que prometeu
    console.log(`Lido arquivo com ${content.byteLength} bytes`); // Escrevo o resultado no console
  })
  .catch((err) => { // Caso ela não cumpra o que prometeu
    console.error(`Erro ao ler arquivo: ${err.message}`); // Escrevo o erro no console
  });

  <!-- IMPORTANTE FRISAR QUE, NESTE MÉTODO, COM PROMISES, NÃO ACONTECE DE DIVERSAS FUNÇÕES SEREM ENCAPSULADAS UMA DENTRO DA OUTRA. ELAS SÃO SEQUENCIADAS ATRAVÉS DO THEN E UM ÚNICO CATCH FICA MONITORANDO A OCORRÊNCIA DE ERRO NA OPERAÇÃO TODA. CASO NÃO TENHA FICADO CLARO, OLHE O PRIMEIRO EXEMPLO, E IMAGINE QUANTOS IF, E RETURNS PARA ERRO E SUCESSO SERIAM NECESSÁRIOS, ALÉM DISSO, FICARIAM UM DENTRO DO OUTRO (CALLBACK HELL) -->

const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

readFilePromise('file1.txt') // A função me promete que vai ler o arquivo
  .then((content) => { // Caso arquivo 1 seja lido,
    console.log(`Lido file1.txt com ${content.byteLength} bytes`); // Escrevo o resultado no console
    return readFilePromise('file2.txt'); // Chamo novamente a função, que me retorna uma nova Promise
  })
  .then(content => { // Caso a Promise retornada pelo `then` anterior seja resolvida,
    console.log(`Lido file2.txt com ${content.byteLength} bytes`); // Escrevemos o resultado no console
    return readFilePromise('file3.txt'); // E chamamos a função novamente, recebendo uma nova promessa
  })
  .then((content) => { // Caso a promessa de leitura do `file3.txt` seja resolvida,
    console.log(`Lido file3.txt com ${content.byteLength} bytes`); // Logamos o resultado no console
  })
  .catch((err) => { // Caso qualquer uma das promessas ao longo do caminho seja rejeitada
    console.log(`Erro ao ler arquivos: ${err.message}`); // Escrevemos o resultado no console
  });

# MÉTODO fs DO NOTE P/ LEITURA DE ARQUIVOS (síncronos)

*** Método fs.readFileSync ***
const fs = require('fs');
const nomeDoArquivo = 'meu-arquivo.txt';
try {
  const data = fs.readFileSync(nomeDoArquivo, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}

1 Param => Nome do arq
2 Param => (Opcional) Quando string, define o encoding('utf8') que será utilizado
Em operações síncronas, é importante tratar os possíveis erros. Neste caso, foi utilizado o try...catch

# MÉTODO fs DO NOTE P/ LEITURA DE ARQUIVOS (assíncronos)

*** Método fs.readFile  C/ CALLBACKS***
const fs = require('fs');
const nomeDoArquivo = 'meu-arquivo.txt';
fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});
1 Param => Nome do arq
2 Param => (Opcional) Quando string, define o encoding('utf8') que será utilizado
3 Param => callback p/ receber e manipular os dados lidos do arquivo

callback:
  => recebe 2 param: err, data

<!-- O TIPO DE ENCONDING É IMPORTANTE. POR PADRÃO É O raw buffer, ÚTIL P/ ENVIO DE DADOS ATRAVÉS DE REQ HTTP. NO CASO, SENDO TXT, É CORRETO ESPECIFICAR O ENCODING. PORÉM ESSES DADOS OCUPAM MEMÓRIA, SENDO ASSIM, UM ARQ DE 1GB, UTILIZARÁ O MESMO VALOR DE RAM -->

*** Método fs.readFile  C/ PROMISES**
const fs = require('fs').promises;
const nomeDoArquivo = 'meu-arquivo.txt';
fs.readFile(nomeDoArquivo, 'utf8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  });

# MÉTODO fs DO NOTE P/ ESCRITA DE ARQUIVOS (assíncronos)
<!-- É possivel escrever c/ callback, mas promises são mais recomendados -->

*** Método fs.readFile  C/ PROMISES**
const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Meu textão')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });

  <!-- TAMBÉM É POSSÍVEL MISTURAR OS MÉTODOS. NÃO SEI SE É RECOMENDADO, MAS FUNCIONOU, RS. (readAndWrite.js) -->

# UTILIZANDO async/await
Sempre que utiliza-se esse método, passa a retornar uma Promise.
const fs = require('fs').promises;
async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}
main()

# FLAGS EM WRITE:
O terceiro paramentro do write é a flag:

fs.writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })

Caso:
flag: 'w' => Se o arquivo não existir, é criado. Caso contrário, é reescrito.
flag: 'wx' => Se o arquivo existir, lança um erro

# COMPILANDO PROMISES COM Promise.all
<!-- Passa um array de Promises e recebe de volta uma única. Os três arquivos são lidos ao mesmo tempo e o then será executado após a leitura dos 3 -->
const fs = require('fs').promises;

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });

*** Exemplo Renato ***
fs.readdir('./')
  .then((fileNames) => {
    console.log(fileNames);
    const fileBytesPromises = fileNames.map((fileName) => {
      return fs.readFile(fileName)
        .then((file) => { return file.byteLength });
    })

  <!-- Caso não utilizasse o Promise All, seria retornado apenas um array de promises -->
    Promise.all(fileBytesPromises)
      .then((fileBytes) => console.log(fileBytes))
  });

<!-- A FUNÇÃO FARA UMA BUSCA DE TODOS OS NOMES DOS ARQUIVOS NA PASTA. DEPOIS FARÁ UM MAP LENDO TODOS OS ARQUIVOS E RETORNANDO O TAMANHO DE CADA UM DELES. PARA TRATAR AS PROMESSAS, UTILIZARÁ O PROMISE.ALL. POR FIM, SOMARÁ CADA UM ATRAVÉS DO REDUCE-->
=> COM ASYNC/AWAIT
async function runAsync() {
  const fileNames = await fs.readdir('./');
  console.log(fileNames);
  
  const filePromises = fileNames.map(async (fileName => {
    const file = await fs.readFile(fileName);
    return file.byteLenght;
  }));
  console.log(filePromises);

  const fileBytes = await Promise.all(filePromises);
  console.log(fileBytes);

  const fileSizeAll = fileBytes.reduce((total, fileByte) => total + fileByte, 0);
}

# ALTERNATIVA P/ CALLBACK: PROMISIFY (AULA AO VIVO)
const util = require('util');
const readFilePromise = util.promisify(fs.readFile);