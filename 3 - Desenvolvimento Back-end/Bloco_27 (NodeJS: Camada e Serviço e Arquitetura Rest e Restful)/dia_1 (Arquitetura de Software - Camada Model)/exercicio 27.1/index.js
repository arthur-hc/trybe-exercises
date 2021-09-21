const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
app.use(bodyParser.json());

const { createUser, getAllUsers ,getUserById, updateUserById } = require('./models/users');

app.get('/user', async (_req, res) => {
  const allUsers = await getAllUsers();
  if(allUsers.length === 0) return res.status(200).send([]);
  return res.status(200).json(allUsers);
})

app.get('/user/:id', async (req, res) => {
  const { id } = req.params
  const user = await getUserById(id);
  if(!user) return res.status(404).json({
    "error": true,
    "message": "Usuário não encontrado"
  });
  return res.status(200).json(user);
})

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if(!firstName || !lastName || !email || !password) return res.status(400).json({ message: 'Preencha todos os campos' });
  if(password.length < 6) return res.status(400).json({
    error: true,
    message: "O campo 'password' deve ter pelo menos 6 caracteres"
  });
  const newUser = await createUser(firstName, lastName, email, password);
  return res.status(201).json(newUser);
});

app.put('/user/:id', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const { id } = req.params;
  if(!firstName || !lastName || !email || !password) return res.status(400).json({ message: 'Preencha todos os campos' });
  if(password.length < 6) return res.status(400).json({
    error: true,
    message: "O campo 'password' deve ter pelo menos 6 caracteres"
  });
  const updatedUser = await updateUserById(id, firstName, lastName, email, password);
  if(updatedUser === 0) return res.status(404).json({
    "error": true,
    "message": "Usuário não encontrado"
  })
  return res.status(201).json(updatedUser);
});

app.listen(port, () => console.log(`Example app listening on port port!`))