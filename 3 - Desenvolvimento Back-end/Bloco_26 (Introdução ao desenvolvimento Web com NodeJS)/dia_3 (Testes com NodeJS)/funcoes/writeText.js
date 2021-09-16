const fs = require('fs');

const writeText = (fileName, text) => {
  try {
    fs.writeFileSync(fileName, text);
    return 'ok'
  } catch (error) {
    
  }
}

writeText('teste.txt', 'testando123')

module.exports = writeText;