const passwordValidation = (req, res, next) => {
  const { password } = req.body;

  // Font: https://stackoverflow.com/questions/8935632/check-if-character-is-number/50183260
  const validation = /^\d+$/.test(password) && String(password).length >= 4 && String(password).length <= 8

  if(!password) return res.status(400).json({ message: 'Empty field' });
  if(!validation) return res.status(400).json({ message: 'Invalid password' });
  
  next();
}

module.exports = passwordValidation;