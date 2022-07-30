const express = require('express');
const router = express.Router();
const userValidation = require('../validations/userValidation');
const emailValidation = require('../validations/emailValidation');
const passwordValidation = require('../validations/passwordValidation');
const loginValidation = require('../validations/loginValidation');

const userValidations = [userValidation, emailValidation, passwordValidation];

router.post('/register', userValidations ,(_req, res) => {
  res.status(201).json({ message: 'user created' })
})

router.post('/login', loginValidation, (_req, res) => {
  res.status(200).json({token: "86567349784e" });
});

module.exports = router;