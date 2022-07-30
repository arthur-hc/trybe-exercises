const emailValidation = (req, res, next) => {
  const { email } = req.body;

  // Font: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validation = re.test(String(email).toLowerCase());

  if(!email) return res.status(400).json({ message: 'Empty field' });
  if(!validation) return res.status(400).json({ message: 'Invalid email' });

  next();
}

module.exports = emailValidation;