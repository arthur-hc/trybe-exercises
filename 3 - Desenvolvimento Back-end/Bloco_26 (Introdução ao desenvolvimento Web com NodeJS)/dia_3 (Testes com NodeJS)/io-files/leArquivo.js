const fs = require('fs');

function leArquivo(nomeDoArquivo) {
  try {
    const conteudoDoArquivo = fs.readFileSync(nomeDoArquivo, 'utf8');
    return conteudoDoArquivo;
  } catch (err) {
    return null;
  }
}

leArquivo('./io-files/arquivo.txt');

module.exports = leArquivo;