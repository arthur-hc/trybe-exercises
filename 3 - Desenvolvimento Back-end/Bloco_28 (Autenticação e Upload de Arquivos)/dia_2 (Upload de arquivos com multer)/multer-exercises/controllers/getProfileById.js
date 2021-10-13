const fs = require('fs');

module.exports = (req, res) => {
  const { id } = req.params;

  const profilesData = JSON.parse(fs.readFileSync('./profiles.json', 'utf-8'));
  const profile = profilesData.find((profile) => profile.id === id);
  
  if(profilesData.length === 0 || !profile) {
    return res.status(404).json({ error: { message: 'Perfil não encontrado' } });
  };

  return res.status(200).json(profile);
}