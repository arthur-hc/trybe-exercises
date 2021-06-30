# Instalar Redux no React
- npm install react-redux

# PASSOS
- npx create-react-app my-app
- npm install --save redux react-redux

redux é a biblioteca que possui a implementação do Redux ;
react-redux é a biblioteca que realiza a conexão entre o Redux e o React .

# Store
src/store/index.js...

import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

<!-- DICA DO ÍCARO...
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer,
composeWithDevTools(),
);
 -->

export default store;


// PERGUNTAS ANTES DE INICIAR O PROJETO
1) Qual o formato do meu estado global?
2) Quais actions a minha aplicação vai ter?

// PASSO A PASSO ALBERTO



1 - Cria pasta store e arquivo index.js
=> src/store/index.js



2 - Preenche o Store ainda sem reducer e seus combinados
=> src/store/index.js

import { createStore } from 'redux'

const store = createStore();

export default store;



3 - Cria a pasta reducers e arquivo index.js
=> src/reducers/index.js



4 - Preenche o Reducer
=> src/reducers/index.js

<!-- O EXEMPLO É DE UM TODO, POR ISSO UM ARRAY, QUE SERÁ DE TAREFAS -->
const INITIAL_STATE = [],

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ELEMNT':
      return [...state, action.value];
    default:
      return state;
  }
}

export default listReducer;



5 - Cria a pasta actions e arquivo index.js
=> src/actions/index.js



6 - Preenche a actions
=> src/actions/index.js

const addAssignment = (value) => ({ type: 'ADD_ELEMENT, value})

export default addAssignment;



7 - Volta para o store e adiciona o reducer e prepara para combina-lo caso seja necessario (boas praticas)
=> src/store/index.js

import { createStore, combineReducers } from 'redux'
import listReducer = from '../reducers
<!-- Quando o nome for index.js, não é neceśsario explicitá-lo. (.../reducers/index.js) -->

const rootReducer = combineReducers({ listReducer })

const store = createStore(rootReducer);

export default store;



8 - Adicionar provider a aplicação
=> src/index.js

import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

ReactDom.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
  document.getElementById('root'),
);


serviceWorker.unregister();



9 - Cria o componente InputList.js
=> src/InputList.js

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addAssignment from './action';

class InputList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { textValue: '' };
  }

  render() {
    const { add } = this.props;
    const { textValue } = this.state;

    return (
      <div>
        <input>
          type="text"
          placeholder="Digite a tarefa"
          onChange={ (event) => this.setState({ textValue: event.target.value }) }
        />
        <button type="button" onClick={ () => add(textValue) }>
          Adicionar tarefa
        </button>
      </div>
    );
  }
}

InputList.PropTypes = {
  add: PropTypes.function().isRequired,
};

const mapDispatchToProps = (dispatch) => {{
  add: (value) => dispatch({ addAssignment(value) })
}}
<!-- A chave add é a que foi definida em cima indicado o que será DESPACHADO COMO PROPS. Também é interessante recuperar a action (neste caso addAssignment) para chamá-la
- Deve-se receber com this.props. 
- Sinalizar o valor com disparo do evento.
- Configurá-lo no mapDispatchToProps. -->

export default connect(null, mapDispatchToProps)(InputList)
<!-- export default connect(recebe, envia)(componente) -->

9 - Cria o componente List.js
=> src/List.js

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class List extends React.Component {
  render() {
    const { list } = this.props;
    <!-- recebe a lista de tarefas como props -->
    return (
      <div>
        <div>
          {list.map((element, index) => <p key={ index }>{element}</p>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.listReducer,
});
<!-- func responsável por "capturar do store" e o state desejado (listReducer) -->

List.propTypes = {
  list: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, null)(List)
<!-- export default connect(recebe, envia)(componente) -->
<!-- Neste caso o null é optativo, podendo ficar assim:
export default connect(mapStateToProps)(List) -->

