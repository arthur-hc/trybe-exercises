require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// IMPORTA O MULTER
const multer = require('multer');

// CAMINHO DA PASTA 'ACEITÁVEL' PELO LINTER
// const path = require('path');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Definindo nossa pasta pública */
/* `app.use` com apenas um parâmetro quer dizer que
   queremos aplicar esse middleware a todas as rotas, com qualquer método */
/* __dirname + '/uploads' é o caminho da pasta que queremos expor publicamente */
/* Isso quer dizer que, sempre que receber uma request, o express vai primeiro
   verificar se o caminho da request é o nome de um arquivo que existe em `uploads`.
   Se for, o express envia o conteúdo desse arquivo e encerra a response.
   Caso contrário, ele chama `next` e permite que os demais endpoints funcionem */

// AQUI, QUALQUER REQUISITAÇÃO COM localhost:3000:/NOME-DO-ARQUIVO, SERÁ FORNECIDO O ARQUIVO COM ESTE NOME
  //  app.use(express.static(__dirname + '/uploads'));

// PARA TORNAR A ROTA MAIS ESPECÍFICA E SER ACESSADA A PARTIR DE /uploads/NOME-DO-ARQUIVO
  app.use('/uploads', express.static(__dirname + '/uploads'))

   // UTILIZANDO O CAMINHO 'ACEITÁEL' PELO LINTER
  //  app.use(express.static(path.join(__dirname, '..', 'uploads')));

/* ***CASO SEJA UM NOME ALEATÓRIO*** 
  Cria uma instância do`multer`configurada. O`multer`recebe um objeto que,
   nesse caso, contém o destino do arquivo enviado. */
  //  const upload = multer({ dest: 'uploads' });

/* 
- Atribui a esta rota função que indica a armazenagem de arquivo

- O multer adiciona um objeto body e um objeto file ao objeto request recebido na callback. Os objetos body e file contêm os valores dos campos de texto e o arquivo enviados pelo formulário, respectivamente.

- O parâmetro passado na chamada de upload.single('file') indica o nome do campo que conterá o arquivo. No caso desse exemplo, o nome é file , mas poderia ter outro nome em outros cenários.

- Por exemplo, se um formulário fosse construído desta forma:
<form action="/post" method="post" enctype="multipart/form-data">
  <input type="file" name="post" />
</form>

*/

/* PARA NOMEAR CUSTOMIZADAMENTE*/
/* destination: destino do nosso arquivo
   filename: nome do nosso arquivo.

   No caso, vamos dar o nome que vem na
   propriedade `originalname`, ou seja,
   o mesmo nome que o arquivo tem no
   computador da pessoa usuária */

   const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'uploads');
    },
    // SALVA O ARQUIVO COM NOME ORIGINAL
    // filename: (req, file, callback) => {
    //   callback(null, file.originalname);
    // }

    // SALVA O ARQUIVO COM O NOME ORIGINAL + DATA DE AGORA
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  
  });
  
  const upload = multer({ storage });

app.post('/files/upload', upload.single('file'), (req, res) =>
  res.status(200).json({ body: req.body, file: req.file })
);

app.get('/ping', controllers.ping);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});


// AO FAZER UMA REQ COM MULTIPART FORM-DATA, OS ARQUIVOS QUE NÃO POSSUEM A CHAVE EM QUE É ESPERADO O ARQUIVO, SERÃO CONSIDERADOS COMO BODY. EX: A KEY ESPERADA É file, UM ARQUIVO COM A CHAVE id, será direcionada para o body.

// PARA SER ESPECÍFICO COM CADA CHAVE, UTILIZAR .fields. USO COMUM EM BANCOS, ONDE É NECESSÁRIO ENVIAR VÁRIAS FOTOS DO RG. NO CASO DO campo1, SE HOUVER MAIS DE UM, OU UM CAMPO NÃO ESPERADO, OCORRERÁ UM ERRO
// app.post('/file/upload', upload.fields([
//   { name: 'campo1', maxCount: 1 },
//   { name: 'campo99', maxCount: 8 }
// ]),
// (req, res) => {
//   // ESTE RETORNO É APENAS PARA ILUSTRAR O QUE É CADA. PODERIA RETORNAR UMA MENSAGEM DE OK
//   res.send({ files: req.files, body: req.body })
// })

// ANY ACEITA QUALQUER, MISTURADOS ETC...