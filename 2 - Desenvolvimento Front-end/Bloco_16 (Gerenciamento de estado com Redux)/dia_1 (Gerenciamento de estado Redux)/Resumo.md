# Redux
É a ferramente que facilita a transmissão de informações, quebrando a necessidade de se transmitir apenas de pai pra filho, e passando a transmitir de forma direta.

# Store
Grande peça onde iremos armazenar as informações do Redux

# Action
Objeto que representa alguma mudança ou alteração que precisa acontecer no State

# Reducer
Entidade separada que receberá os pedidos de atualização do estado e enviará pro store como ele será atualizado

Em resumo: Função que pega o estado atual, pega o estado novo, junta e retorna para o store

### Fluxo ###
Componentes => Action => Recucer => Store => Componentes

# Dispatch
store.dispach()

Função para enviar uma action para o reducer e ocorrer o processamento

store.dispach(action)

# getState
store.getState()

Função para recuperar o estado armazenado no store

# NA PRÁTICA...
=> CRIANDO UM STORE...
- const reducer = (state = 5) => {
  return state;
}

- const store = Redux.createStore(reducer);

=> OBTENDO UM ESTADO...
- const currentStore = store.getState();

=> DEFININDO UMA ACTION...
- const action= { type: 'LOGIN' }

# Combinar reducers
- combineReducers();
Essa função recebe um objeto como parâmetro contendo cada um dos seus reducers como elementos, por exemplo:

// Arquivo index.js

import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';

const reducerCombinado = combineReducers({
  meuReducer,
  meuOutroReducer});

export default reducerCombinado;

Agora basta fazer a sua importação no seu store para a mágica acontecer!

import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);
...