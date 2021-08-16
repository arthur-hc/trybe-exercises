# Componentes Funcionais
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>Counter: {counter}</div>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increase Counter
      </button>
    </div>
  );
}

export default App;

- Caso necessário, as props são recebidas como parâmetr0 o. ex: function App({props})
- O estado da aplicação passa a ser com const [nomeItemDoEstado, setNomeItemDoEstado] = useState(valor default)
- this será removido, assim como constructor, super...

# COMO FUNCIONA HOOKS
- Será um conteúdo complementar ao anterior, juntando conceitos de Context + ferramentas hooks

# CRIANDO AMBIENTE
- Cria context (Passo a passo similar ao dia anterior)
//src/context/AppContext.js
import { createContext } from 'react';

const AppContext = createContext();

export default AppContext;

- Criando Provider
//src/context/Provider.js
import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [stateA, setStateA] = useState('initialStateA');
  const [stateB, setStateB] = useState('initialStateB');
  const contextValue = {
    stateA,
    setStateA,
    stateB,
    setStateB,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

- Fazer com que o Provider encapsule a aplicação
//index.js

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import Provider from '../utils/Provider'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)

# UTILIZANDO O AMBIENTE
- Com o ambiente criado para cobrir todas as childrens, o estado pode ser recuperado em qualquer componente filho. Esse contexto será ativo com const { stateA, setStateA, stateB, setStateB } = useContext(AppContext);
//src/components/ComponenteX
import React, { useContext } from 'react';
import AppContext from '../utils/AppContext';

const ComponenteX = () => {
  const { stateA, setStateA, stateB } = useContext(AppContext);

  return (
    <div>
      <p>{stateA}</p>
      <p>{stateB}</p>
      <button onClick={() => setStateA("newState")}>Click</button>
    </div>
  );
};

export default ComponenteX;