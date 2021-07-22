# Context
- Permite que funções, estados, valores etc, sejam transmitidos entre os componentes sem a necessidade de passar props de pai p/ filho.

# 1 - CRIA O CONTEXTO
- MyContext.js
import React, { createContext } from 'react';

const MyContext = createContext(defaultValue);

# 2 - Define quem irá prover para os níveis abaixo na árvore.
- Aceita uma prop obrigatória value com os dados que serão compartilhados

<MyContext.Provider value={/* algum valor compartilhado */}>
  <MyComponent>
    <MyOtherComponent>
      ...
    </MyOtherComponent>
  <MyComponent>
</MyContext.Provider>

# 3 - Quando necessário consumir, o componente utiliza Consumer
function MyComponent() {
  return (
    <MyContext.Consumer>
      {(value) => {
        /* renderiza algo utilizando o valor recebido do contexto */
      }}
    </MyContext.Consumer>
  )
}

# Detalhes relevantes
- Quando definido um valor default, se não hover parâmetro, será ele o valor retornado
- Lembrar de bindar ou criar como arrow function quando o evento/estado ocorre no elemento pai e é executado em outros componentes
- Se utilizar o contextType, deixa de ser necessário a utilização do <MyContext.Consumer> envolvendo os intens do return

... após o render
const { itemContexto1, itemContexto2 } = this.context

... no final do arquivo que que o contexto será consumado

NomeDoComponente.contextType = MyContext;
<!-- Agora, todo esse componente terá acesso-->
<!-- SE HOUVER MAIS DE UM CONTEXTO, ESSE MÉTODO NÃO É POSSÍVEL -->



<!-- EXEMPLOS -->
# SEM CRIAR PASTA DEDICADA AO CONTEXT
- App.js

import React, { Component } from 'react';
import './App.css';
import Cars from './Cars';

export const CarContext = React.createContext();

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
  }

  moveCar = (car, side) => {
    this.setState((previus) => ({
      cars: {
        ...previus.cars,
        [car]: !side
      }
    }))
  };
  
  render() {
    const contextValue = {
      cars: {...this.state.cars},
      moveCar: this.moveCar,
    }
    return (
      <CarContext.Provider value={contextValue}>
        <Cars />
      </CarContext.Provider>
      
    );
  }
}

export default App;

- Cars.jsx

// src/Cars.jsx

import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { CarContext } from './App';

function Cars() {
  return (
    <CarContext.Consumer>
      {({cars: {red, blue, yellow}, moveCar}) => (
        <div>
          <div>
            <img
              className={red ? 'car-right' : 'car-left'}
              src={carRed}
              alt="red car"
            />
            <button
              onClick={() => moveCar('red', red)}
              type="button"
            >
              Move
            </button>
          </div>
          <div>
            <img
              className={blue ? 'car-right' : 'car-left'}
              src={carBlue}
              alt="blue car"
            />
            <button
              onClick={() => moveCar('blue', blue)}
              type="button"
            >
              Move
            </button>
          </div>
          <div>
            <img
              className={yellow ? 'car-right' : 'car-left'}
              src={carYellow}
              alt="yellow car"
            />
            <button
              onClick={() => moveCar('yellow', yellow)}
              type="button"
            >
              Move
            </button>
          </div>
        </div>        
      )}
      
    </CarContext.Consumer>
  );
}

export default Cars

# CRIANDO PASTAS DEDICADAS
- Cria pasta context

- src/context/MyContext.js

import { createContext } from 'react';

const MyContext = createContext();

export default MyContext;


- src/context/Provider.js

import React, { Component } from 'react';
import MyContext from './MyContext';

class Provider extends Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signalColor: 'red'
    }
  }
  
  moveCar = (car, side) => {
    this.setState((previus) => ({
      cars: {
        ...previus.cars,
        [car]: !side,
      }
    }))
  }

  changeSignal = (color) => {
    this.setState({
      signalColor: color,
    })
  }

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }

    const { children } = this.props;

    return (
      <MyContext.Provider value={ context }>
        {children}
      </MyContext.Provider>
    )
  }
}

export default Provider;

- src/App.js (Permanece igual)

import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';

function App() {
  return (
    <div className="container">
      <Cars />
      <TrafficSignal />
    </div>
  );
}

export default App;

- src/Cars.jsx

import React, { Component } from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import MyContext from './context/MyContext';

class Cars extends Component {
  render() {
    const { red, blue, yellow } = this.context.cars;
     const { moveCar } = this.context;
    return (
      <div>
        <div>
          <img
            className={red ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => moveCar('red', red)}
            type="button"
          >
            Move
          </button>
        </div>
        <div>
          <img
            className={blue ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={() => moveCar('blue', blue)}
            type="button"
          >
            Move
          </button>
        </div>
        <div>
          <img
            className={yellow ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={() => moveCar('yellow', yellow)}
            type="button"
          >
            Move
          </button>
        </div>
      </div>    
    );
  }
}

Cars.contextType = MyContext;

export default Cars;

- src/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider  from './context/Provider'

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

- src/TrafficSignal.jsx

import React, { Component } from 'react';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import MyContext from './context/MyContext';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

class TrafficSignal extends Component {
  render() {
    const { signalColor ,changeSignal } = this.context
    return (
      <div>
        <div className="button-container">
          <button onClick={() => changeSignal('red')} type="button">
            Red
          </button>
          <button onClick={() => changeSignal('yellow')} type="button">
            Yellow
          </button>
          <button onClick={() => changeSignal('green')} type="button">
            Green
          </button>
        </div>
        <img className="signal" src={renderSignal(signalColor)} alt="" />
      </div>
    );
  }
  
};

TrafficSignal.contextType = MyContext

export default TrafficSignal;
