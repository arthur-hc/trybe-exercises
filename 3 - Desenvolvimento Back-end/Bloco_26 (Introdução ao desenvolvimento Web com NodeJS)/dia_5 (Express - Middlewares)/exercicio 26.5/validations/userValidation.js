const userValidation = (req, res, next) => {
  const { username } = req.body;
  if(!username) return res.status(400).json({ message: 'Empty field' });
  if(username.length <= 3 ) return res.status(400).json({ message: 'Min 3 characters' });

  next();
}

module.exports = userValidation;