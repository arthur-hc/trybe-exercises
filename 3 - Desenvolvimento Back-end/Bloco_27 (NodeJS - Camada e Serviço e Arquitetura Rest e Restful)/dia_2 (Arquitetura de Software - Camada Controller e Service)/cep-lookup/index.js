const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

const controller = require('./controllers/cep-lookup');

app.use(bodyParser.json());

app.get('/ping', (req, res) => res.status(200).json({ message: "pong!" }));

app.get('/cep/:cep', controller.getAddressByCep);

app.post('/cep', controller.createAddress);

app.listen(port, () => console.log(`Example app listening on port port!`));
