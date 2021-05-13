// NO TERMINAL RETORNA A PAGINA HTML: curl -H "Accept: text/html" "https://icanhazdadjoke.com/"
// NO TERMINAL RETORNA APENAS A PIADA: curl -H "Accept: text/plain" "https://icanhazdadjoke.com/"
// NO TERMINAL RETORNA EM FORMA DE OBJETO: curl -H "Accept: application/json" "https://icanhazdadjoke.com/

// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: {'Accept': 'application/json'}
  };
  fetch(API_URL, myObject)
    .then((response) => response.json())
      .then((json) => document.getElementById('jokeContainer').innerText = json.joke)
};

window.onload = () => fetchJoke();