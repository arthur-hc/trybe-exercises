const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const userRouter = require('./routes/userRouter');
app.use('/user', userRouter);

const btcRouter = require('./routes/btcRouter');
app.use('/btc', btcRouter);

const posts = require('./routes/postsRouter');
app.use('/posts', posts)

const teams = require('./routes/teamsRouter');
app.use('/teams', teams)

app.use('*', (_req, res) => {
  res.status(404).json({ message: "Opsss, route not found!" })
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001 exercicio 26.5')
});