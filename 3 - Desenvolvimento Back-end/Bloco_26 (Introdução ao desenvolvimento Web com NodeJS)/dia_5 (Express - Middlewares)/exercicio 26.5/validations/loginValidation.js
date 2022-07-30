const loginValidation = (req, res, next) => {
  const { email, password } = req.body;

  // Font: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailValidation = re.test(String(email).toLowerCase());

  // Font: https://stackoverflow.com/questions/8935632/check-if-character-is-number/50183260
  const passwordValidation = /^\d+$/.test(password) && String(password).length >= 4 && String(password).length <= 8

  if(!email || !password) return res.status(400).json({ message: 'Empty field' });
  if(!emailValidation || !passwordValidation) return res.status(400).json({ message: 'Email or password is incorrect' });

  next();
}

module.exports = loginValidation;
