// PROPS SÃO AS PARTES QUE IRÃO COMPOR O COMPONENTE(INPUTS)
// EX:
function greeting(name, lastName){
  return `Hello, ${name} ${lastName}`;
}
console.log(greeting('Samuel', 'Silva'));

// COM REACT

// NO Greeting.js
import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
  }
}

export default Greeting;

// NO App.js
import Greeting from './Greeting';

function App() {
  return (
    <main>
      <Greeting name={Samuel} lastName={Silva} />
    </main>
  );
}

export default App;


// POR BAIXO DOS PANOS
const props = { name: 'Samuel', lastName: 'Silva' }