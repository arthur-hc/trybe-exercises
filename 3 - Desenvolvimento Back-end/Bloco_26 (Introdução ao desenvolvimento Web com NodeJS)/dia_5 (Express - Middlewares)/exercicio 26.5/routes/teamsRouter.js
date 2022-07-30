const express = require('express');
const router = express.Router();
const fs = require('fs').promises

const nameValidation = (req, res, next) => {
  const { name } = req.body;
  const validation = !(!name || name.length < 5)

  if(!validation) return res.status(400).json({ message: 'invalid data' });
  next();
};

const initialValidation = (req, res, next) => {
  const { initials } = req.body;
  if(!initials || initials.length > 3 || initials !== initials.toUpperCase()) return res.status(400).json({ message: 'invalid data' })
  ;
  next();
};

const validations = [nameValidation, initialValidation];

router.post('/', validations, async (req, res) => {
  const { name, initials, league } = req.body;
  const data = { name, initials, league };
  try {
    await fs.writeFile(`./teamsData/team${initials}.json`, JSON.stringify(data));
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error });
  };
});

module.exports = router;