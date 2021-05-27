import React, { Component } from 'react';

const handleClick1 = () => {
  console.log('Botão 1')
}

const handleClick2 = () => {
  console.log('Botão 2')
}

const handleClick3 = () => {
  console.log('Botão 3')
}

class App extends Component {
  render() { 
    return (  
      <div>
        <button onClick={handleClick1} >Button 1</button>
        <button onClick={handleClick2}>Button 2</button>
        <button onClick={handleClick3}>Button 3</button>
      </div>
    );
  }
}
 
export default App;
