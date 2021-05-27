// >>>>>>>>>>>> ESTADOS <<<<<<<<<<<<<<

// Estados são formas de armazenar informações para utilização durante a aplicação. No JS comum, para criar um contador, precisariamos de um contador com escopo global, que ao ativar a função, o valor do contador seria atualizado. Entretanto, com React, essa responsabilidade faz mais sentido com os estados. Cada classe possuirá seu próprio estado. 

// Class ValorTotal => Estado Contador-Valor
// Classe 1 => Estado 1
// Classe 2 => Estado 2
// Classe 3 => Estado 3

// Cada classe possuí seu estado


// >>>>>>>>>>>>> EVENTOS <<<<<<<<<<<<<<

// Essa seria uma sintaxe para adicionarmos eventos aos nossos componente. Ainda não é a ideial, mas começa a mostrar elementos que serão utilizados com React. Observe:
import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
function handleClick() {
  console.log('Clicou no botão!')
}

class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return <button onClick={handleClick}>Meu botão</button>
  }
}

export default App;

// FIXAÇÃO 1