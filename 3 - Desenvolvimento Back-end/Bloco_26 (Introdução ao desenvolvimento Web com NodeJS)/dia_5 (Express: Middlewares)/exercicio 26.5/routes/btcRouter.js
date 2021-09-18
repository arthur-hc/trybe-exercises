const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const tokenValidation = require('../validations/tokenValidation');

const url = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json'

router.get('/price', tokenValidation, async (_req, res) => {
  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).send(error)
  }
});

module.exports = router;