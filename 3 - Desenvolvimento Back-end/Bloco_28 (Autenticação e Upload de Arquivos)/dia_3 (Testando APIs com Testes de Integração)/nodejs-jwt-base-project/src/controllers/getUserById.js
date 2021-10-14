const Model = require('../models/user');

module.exports = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await Model.getUserById(userId);

    if (!user) throw Error('Usuário não encontrado');

    res.status(201).json({ message: 'Novo usuário criado com sucesso', user });
  } catch (err) {
    res.status(400)
  }
  
  
};