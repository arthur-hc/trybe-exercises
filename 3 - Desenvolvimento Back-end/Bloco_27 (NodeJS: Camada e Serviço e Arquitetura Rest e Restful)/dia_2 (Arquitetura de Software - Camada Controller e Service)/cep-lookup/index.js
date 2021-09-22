const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

const models = require('./models/cep-lookup');

app.use(bodyParser.json());

app.get('/ping', (req, res) => res.status(200).json({ message: "pong!" }));

app.get('/cep/:cep', async (req, res) => {
  const { cep } = req.params;
  if(!cep) return res.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } });
  console.log('passou primeiro if')
  const cepRegex = /\d{5}-?\d{3}/
  const cepRegexJustNumbers = /\d{8}/
  
  const cepValidation = cep.includes('-') ? cepRegex.test(cep) : cepRegexJustNumbers.test(cep);

  if(!cepValidation) return res.status(400).json({ "error": { "code": "invalidData", "message": "CEP inválido" } });

  const address = await models.getAddressByCep(cep)
  
  return res.status(200).send(address)
})
app.listen(port, () => console.log(`Example app listening on port port!`));
