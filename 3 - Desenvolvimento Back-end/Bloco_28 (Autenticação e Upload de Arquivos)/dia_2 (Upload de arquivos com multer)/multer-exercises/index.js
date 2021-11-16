/* eslint-disable max-lines-per-function */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// IMPORTA O MULTER
const multer = require('multer');

// IMPORTA O MÓDULO FS PARA VERIFICAR SE O ARQUIVO JÁ EXISTE
const fs = require('fs');

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

app.get('/ping', controllers.ping);

// PERSONALIZA O STORAGE P/ O MULTER
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },

  // SALVA O ARQUIVO COM DATA DE AGORA + NOME ORIGINAL
  filename: (req, file, callback) => {
    // CRIA VERIFICAÇÃO DE TIPO DE ARQUIVO
    if (file.mimetype !== 'image/jpeg') {
      return callback(new Error('Extension must be `png`'), false);
    }
    
    // CRIA VERIFICAÇÃO DE EXISTÊNCIA DE UM ARQUIVO COM AQUELE NOME SEM O TIMESTAMP
    const filesStored = fs.readdirSync(`${__dirname}/uploads`);
    // eslint-disable-next-line no-shadow
    const filesStoredWithoutTimestamp = filesStored.map((file) => {
      const splitedName = file.split('-');
      const withotTimestamp = splitedName.slice(1, file.length);
      const newName = withotTimestamp.join('-');
      return newName;
    });
    
    if (filesStoredWithoutTimestamp.some((fileName) => fileName === file.originalname)) {
      return callback(new Error('File already exists'), false);
    }

    const date = Date.now();

    const fileNameStored = `${date}-${file.originalname}`;

    const fileDataToReturn = {
      file: file.originalname,
      url: `http://localhost:3000/uploads/${fileNameStored}`,
    };

    if (req.filesPath) {
      req.filesPath.push(fileDataToReturn);
    } else {
      req.filesPath = [fileDataToReturn];
    }

    callback(null, fileNameStored);
  },
});

// MULTER UTILIZA O STORAGE PERSONALIZADO
const upload = multer({ storage });

// CRIA ENDPOINT QUE RECEBE UM ÚNICO ARQUIVO E ADICIONA FUNÇÕES QUE LIDARÁ COM UPLOAD
app.post('/upload', upload.single('file'), (_req, res) =>
  res.status(200).json({ message: 'OK' }));

// CRIA ENDPOINT QUE RECEBE MULTIPLOS ARQUIVOS E ADICIONA FUNÇÕES QUE LIDARÁ COM UPLOAD
app.post('/multiple', upload.array('file'), (req, res) => res.status(200).json(req.filesPath));

// CRIA UM MULTER PADRÃO QUE IRÁ ENVIAR AS FOTOS PARA A PASTA profilePics
const picUpload = multer({ dest: 'profilePics' });

// CRIA ENDPOINT QUE RECEBE INFORMAÇÕES E FOTO P/ CADASTRO, ADICIONA FUNÇÕES QUE LIDARÁ COM UPLOAD E DIRECIONA PARA O CONTROLLER
app.post('/profile', picUpload.single('profilePic'), controllers.newProfile);

app.get('/profiles/:id', controllers.getProfileByID);

app.use(middlewares.error);
app.use('/uploads', express.static(`${__dirname}/uploads`));
app.use('/profilePics', express.static(`${__dirname}/profilePics`));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
