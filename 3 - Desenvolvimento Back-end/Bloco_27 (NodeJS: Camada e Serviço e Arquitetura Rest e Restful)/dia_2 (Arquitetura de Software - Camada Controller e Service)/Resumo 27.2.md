# CONTROLLERS E SERVICES
- (1) Receber e tratar dados da requisição
- (2) Aplicar regras de negócio

- Assim, a responsabilidade do model é diminuída e em casos de manutenção ou mudanças, as alterações são mais isoladas.

- FLUXO:

Cliente <res || req> API <> Controller <> Services <> Model <> DB || API Externa || Sistema de arq

# CONTROLLERS
- 1 Camada => Onde dados são recebidos e tratados antes das outras camadas.
- Recebe as req e consulta o service, enviando a resposta do mesmo. Retorna erro, em caso de falha, ou info pedidas, em caso de sucesso.

- Passar apenas as informações necessárias para o service, não todo o req. (Garçom, anota o pedido,leva para o preparador. Depois recebe o prato de serve);

# SERVICES
- Responsável pela lógica do negócio. Tem a finalidade de evitar que o modelo fique grande demais,principalmente em aplicações maiores (Chef, recebe e delega as funções depois de receber o pedido do garçom);

- Deve centralizar acesso a dados e funções externas. Exemplo: chamar um evento que dispara uma mensagem no Slack;
- Deve abstrair lógica de negócio complexa do seu modelo;
- Não deve ter nenhum tipo de informação sobre o acesso a camada de dados. Exemplo: não ter nenhuma query SQL;
- Não deve receber nada relacionado ao HTTP, seja o request ou o response . O controller deve mandar apenas o necessário para o service .

# BOAS PRÁTICAS DE ARQUITETURA
- Pense em componentes. Mantenha cada model, serviço ou controler independente um do outro. Isso facilita a manutenção e reutilização do código

- Pastas organizadas
Opção 1: {
  author: { authorController, authorService, authorModel }
  book: { bookController, bookService, bookModel }
}

Opção 2: {
  controllers: { authorController, bookController }
  services: { authorService, bookService }
  model: { authorModel, bookModel }
}

- Mantenha express o MAIS LONGE POSSÍVEL
=> manter os obj req e res dentro do escopo do controller e NUNCA PASSAR INTEIROS PARA O SERIVCES
const userController = async (req, res) => {
  try {
    // ruim 😧
    await UserService.create(req);

    // bom! 😊
    const { email, password } = req.body;
    await UserService.create(email, password);

    res.send({ message: 'Tudo certo!' });
  } catch (e) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
};

# UTILIZAR VARIÁVEIS DE AMBIENTE PARA DADOS SENSÍVEIS
- DB_URL

- Ela é definida pela terminal
DB_URL="mongodb://localhost:27017" node index.js

// index.js
console.log(process.env.DB_URL) // mongodb://localhost:27017

*** MAIS FÁCIL CRIAR UM ARQUIVO .env NA RAIZ DO PROJETO E UTILZAR A LIB dotenv QUE PEGA O CONTEÚDO E ENVIA VIA process.envi ***
- npm install dotenv

# .env
PORT=3000
DB_URL=mongodb://localhost:27017
DB_NAME=model_example

- // index.js
require('dotenv').config();
// ...
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
// Server listening on port 3000


- // models/connection.js
const mongoClient = require('mongodb').MongoClient;

const connection = () => {
  return mongoClient
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(process.env.DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
   });
};

module.exports = connection;

** COLOCAR O .env no .gitigore, NÃO QUEREMOS versionar esse arquivo