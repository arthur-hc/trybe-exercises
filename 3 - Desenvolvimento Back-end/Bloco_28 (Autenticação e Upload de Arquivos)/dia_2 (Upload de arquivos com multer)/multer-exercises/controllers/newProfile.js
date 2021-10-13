// O TRATAMENTO DOS DADOS, ASSIM COMO ARMAZENAMENTO, DEVERIA SER NO SERVICE
const fs = require('fs');

module.exports = (req, res) => {
  const { name, email, password, bio } = req.body;

  const newProfile = {
    id: req.file.filename,
    name,
    email,
    password,
    bio
  };

  const profilesData = JSON.parse(fs.readFileSync('./profiles.json', 'utf-8'));
  profilesData.push(newProfile);
  fs.writeFileSync('./profiles.json', JSON.stringify(profilesData));


  res.status(201).json({ message: 'Profile Created', newProfile });
};
