# Checklist react-redux: Passo a passo para guardar no coração e colar na parede
- npx create-react-app my-app-redux;
- npm install --save redux react-redux;
- npm install.
- npm install --save redux-devtools-extension
- npm install react-router-dom; (SE FOR UTILIZAR MAIS DE UMA PÁGINA)
- npm i redux redux-thunk (SE FOR UTILIZAR REDUX THUNK)


# Criar dentro do diretório src:
- diretório actions;
- diretório reducers;
- diretório store.

# Criar dentro do diretório actions:
- arquivo index.js.

Exemplos de Actions
- export const addClientAction = (newClientInfo) => ({type: 'ADD_CLIENT', newClientInfo})
- export const deleteClientAction = (id) => ({type: 'DELETE_CLIENT', id})
- export const doneTaskAction = (task, id) => ({type: 'DONE_TASK', task, id});
- export const clearTodoAction = () => ({type: 'CLEAR_TODO'});

Exemplos de Actions com async
- arquivo index.js.
export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

<!-- Esta primeira action apenas muda o estado para loading: true -->
- - export const requestAPI = () => ({ type: REQUEST_API });
<!-- Com esta action, após a resposta da requisição, será armazenado os dados no estado -->
export const getPicture = (data) => ({ type: GET_PICTURE, data });
<!-- Cria-se uma nova action que ao iniciar seus processos async deve-se declarar como assincronas, seja com async, seja com  then  -->
// export function fetchAPI() {
//   // Desenvolva aqui o código da action assíncrona
//   return (dispatch) => {
//     dispatch(requestAPI());
//     return fetch('https://aws.random.cat/meow')
//       .then((r) => r.json()
//         .then(
//           (json) => dispatch(getPicture(json))
//         ));
//   };
// };

// COM ASYNC
export const fetchAPI = () => {
  // Desenvolva aqui o código da action assíncrona
  return async (dispatch) => {
    dispatch(requestAPI());
    const reponse = await fetch('https://aws.random.cat/meow')
    const json =  await reponse.json();
    dispatch(getPicture(json));
  };
};

// COM ASYNC EM UMA ESTRUTURA MENOR
export const fetchAPI = () => async (dispatch) => {
  dispatch(requestAPI());
  const reponse = await fetch('https://aws.random.cat/meow')
  const json =  await reponse.json();
  dispatch(getPicture(json));
};

// CASO SEJA NECESSÁRIO UTILIZAR PARAMETRO
export const REQUEST_API = 'REQUEST_API';
export const GET_POSTS = 'GET_POSTS';

// THIS ACTION ACTION SET isLoading: true
export const requestApiAction = () => ({type: REQUEST_API});

// THIS ACTION SET data WITH API RESPONSE IN SUCCESS CASE
export const getPostsAction = (data) => ({type: GET_POSTS, data})

// THIS ACTION COMBINE ACTIONS IN A THANK DURING A REQUEST API PROCESS
export const fetchAPI = (subject) => {
  return async (dispatch) => {
    dispatch(requestApiAction());
    try {
      const response = await fetch(`https://www.reddit.com/r/${subject}.json`)
      const json = await response.json()
      console.log(json)
      // dispatch(getPostsAction(json))
    } catch (error) {
      console.log(error)
    }
  }
}

# Criar dentro do diretório reducers:
- arquivo index.js.
Exemplo de index
import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({taskReducer})

export default rootReducer

- arquivo reducer.js.
Exemplos de Reducers
const INITIAL_STATE = {
  logged: false,
  clients: [],
  id: 1,
};

const LOGIN = 'LOGIN'
const LOGOFF = 'LOGOFF'
const ADD_CLIENT = 'ADD_CLIENT'
const DELETE_CLIENT = 'DELETE_CLIENT'

function pageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, logged: true};
    case LOGOFF:
      return {...state, logged: false};
    case ADD_CLIENT:
      return {...state, clients: [...state.clients, action.newClientInfo], id: state.id + 1}
    case DELETE_CLIENT:
      return {...state, clients: state.clients.filter((client) => client.id !== action.id)}
    default:
      return state;
  }
}

export default pageReducer;

const INITIAL_STATE = {
  tasksToDo: [],
  tasksCompleted: [],
  filter: '',
  previusState: null,
  id: 1,
};

const ADD_TASK = 'ADD_TASK';
const CLEAR = 'CLEAR'
const CLEAR_TODO = 'CLEAR_TODO'
const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
const CHANGE_FILTER = 'CHANGE_FILTER'
const DONE_TASK = 'DONE_TASK'
const UNDONE_TASK = 'UNDONE_TASK'
const RECOVER = 'RECOVER'

function taskReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TASK:
      return {...state, previusState: state, tasksToDo:[...state.tasksToDo, {task:action.task, id: action.id}], id: state.id + 1};
    case CLEAR:
      return {...state, previusState: state, tasksToDo:[], tasksCompleted: []}
    case CLEAR_TODO:
      return {...state, previusState: state, tasksToDo:[]}
    case CLEAR_COMPLETED:
      return {...state, previusState: state, tasksCompleted: []}
    case CHANGE_FILTER:
      return {...state, previusState: state, filter: action.value}
    case DONE_TASK:
      return {...state, previusState: state, tasksToDo: state.tasksToDo.filter((item) => item.id !== action.id), tasksCompleted: [...state.tasksCompleted, {task:action.task, id: action.id}]}
    case UNDONE_TASK:
      return {...state, previusState: state, tasksCompleted: state.tasksCompleted.filter((item) => item.id !== action.id), tasksToDo: [...state.tasksToDo, {task:action.task, id: action.id}]}
      case RECOVER:
        if(state.previusState) {
          return {...state.previusState}
        } else {
          return INITIAL_STATE;
        }
    default:
      return state;
  }
}

export default taskReducer;

EXEMPLO DE REDUCER ASYNC
- O index terá a mesma estrutrutura combinando os reducers e exportando como rootReducer
- Exemplo de reducer com async
import { REQUEST_API, GET_PICTURE } from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  imgURL: '',
  defaultImg: true,
};

function gallery(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
      defaultImg: true,
    };
  case GET_PICTURE:
    return {
      ...state,
      isLoading: false,
      imgURL: action.data,
      defaultImg: false,
    };
  default:
    return state;
  }
}

export default gallery;


# Criar dentro do diretório store:
- arquivo index.js.

- Exemplo de Store

import { createStore } from 'redux'
import rootReducer from '../Reducers'

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;

- Exemplo de Store com redux Thunk (PARA ESTE PASSO, É NECEŚSARIO NPM I DEVTOOLS indicado no início)

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk)
));

export default store;

# Em src/index.js: (HÁ UM OUTRO EXEMPLO COM BROWSER ROUTER, QUE ESTARÁ EM SEU RESPECTIVO PASSO)
- definir o Provider, <Provider store={ store }> , para fornecer os estados à todos os componentes encapsulados em <App /> .

- arquivo src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


# Se a sua aplicação não terá outras páginas, não é necessário configurar as rotas. Caso contrário:
- npm install react-router-dom;

# Em src/index.js: (BROWSER ROUTER)
- definir o BrowserRouter, <BrowserRouter> .
Exemplo:
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

# No arquivo App.js (COM ROUTES, SWITCH, MAPSTOPROPS E DISPATCH):

- definir o Switch, <Switch> ;
- definir a Route, <Route> .

Exemplos de rotas
import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Login'
import Clients from './Pages/Clients'
import Register from './Pages/Register'
import { connect } from 'react-redux';
import { logoffAction } from './Actions'

class App extends React.Component {
  render() {
    const { logInfo, logoff } = this.props;
    return (
      <div className="App">
       <header>
         <Link to='/'><button>Home</button></Link>
         <Link to='/clientpage'><button>Clients</button></Link>
         <Link to='/register'><button>Register</button></Link>
         {logInfo? <Link to='/login' onClick={() => logoff()} ><button>Logout</button></Link> : <Link to='/login'><button>Login</button></Link>}
         {logInfo? <p>You're Login</p> : <p>You're Logoff</p> }
       </header>
       <Switch>
         <Route exact path='/' component={ Home }/>
         <Route exact path='/login' component={ Login }/>
         <Route exact path='/clientpage' component={ Clients }/>
         <Route exact path='/register' component={ Register }/>
       </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logInfo: state.pageReducer.logged,
})

const mapDispatchToProps = (dispatch) => ({
  logoff: () => dispatch(logoffAction())
})

export default connect(mapStateToProps, mapDispatchToProps) (App);

# O BrowserRouter, o Switch e a Route são três componentes essenciais para trabalhar rotas em React.
# Caso necessário:
- criar o diretório components;
- criar o diretório pages.

# No arquivo store/index.js: (EXEMPLO JÁ DADO ANTERIORMENTE)
- importar o rootReducer e criar a store;
- configurar o Redux DevTools.

# Na pasta reducers: (EXEMPLO JÁ DADO ANTERIORMENTE)
- criar os reducers necessários;
- configurar os exports do arquivo index.js.

# Na pasta actions: (EXEMPLO JÁ DADO ANTERIORMENTE)
- criar os actionTypes;
- criar as actions necessárias.


# Nos componentes:
- criar a função mapStateToProps se necessário;
- criar a função mapDispatchToProps se necessário;
- fazer o connect se necessário.

 Exemplos
  # InputComp.js
  import React from 'react';
  import { connect } from 'react-redux';
  import {addTaskAction, clearAction, clearTodoAction, clearCompletedAction, changeFilterAction, recoverAction} from '../Actions'

  class InputComp extends React.Component {
    constructor() {
      super()
      this.state = {task: ''};
    }

    render() {
      const { task } = this.state;
      const { add, clear, clearToDo, clearCompleted, chageFilter, recover, id } = this.props;

      const handleChange = ({target}) => {
        const { name } = target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [name]: value})
      }

      const handleFilter = ({target}) => {
        chageFilter(target.value)
      }

      const submit = () => {
        add(task, id)
        this.setState({task:''})
      }

      const clearAll = () => {
        clear()
        this.setState({task:''})
      }

      const clearToDoList = () => {
        clearToDo()
        this.setState({task:''})
      }

      const clearCompletedList = () => {
        clearCompleted()
        this.setState({task:''})
      }

      return (
        <div className="flex-colum-center">
          <input name="task" onChange={handleChange} value={ task } />
          <div>
            <button onClick={() => submit()}>Add</button>
            <button onClick={() => clearAll()}>Clear</button>
            <select name="filter" onChange={handleFilter}>
              <option value=''>All</option>
              <option value='completed'>Completed</option>
              <option value='toDo'>To Do</option>
            </select>
            <button onClick={() => clearToDoList()}>Clear 1</button>
            <button onClick={() => clearCompletedList()}>Clear 2</button>
            <button onClick={() => recover()}>Undo</button>
          </div>
        </div>
      )
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    add: (task, id) => dispatch(addTaskAction(task, id)),
    clear: () => dispatch(clearAction()),
    clearToDo: () => dispatch(clearTodoAction()),
    clearCompleted: () => dispatch(clearCompletedAction()),
    chageFilter: (value) => dispatch(changeFilterAction(value)),
    recover: () => dispatch(recoverAction())

  });

  const mapStateToProps = (state) => ({
    id: state.taskReducer.id
  })

  export default connect(mapStateToProps, mapDispatchToProps) (InputComp)
  # Login.js
import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../Actions'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      user: '',
      password: '',
    }
  }

  render() {
    const { user, password } = this.state;
    const { logInfo, enter } = this.props;

    const handleChange = ({target}) => {
      const name = target.name;
      const value = target.value;
      this.setState({
        [name] : value
      });
    };

    const userValidation = () => {
      const {user, password } = this.state;
      if(user === 'user' && password === '123') {
        alert('Welcome');
        enter();
      } else {
        alert('User or Password incorrect');
        this.setState({
          user: '',
          password: '',
        });
      };
    };

    if(logInfo) {
      return <Redirect to="/clientpage" />
    }

    return ( 
      <div>
        <h1>Login</h1>
        <div>
          <form>
            <label htmlFor='user'> User:<br/>
              <input name='user' value={user} onChange={(e) => handleChange(e)}/><br/>
            </label>
            <label htmlFor='password'> Password:<br/>
              <input name='password' type='password' value={password} onChange={(e) => handleChange(e)}/>
            </label>
          </form>
          <button onClick={() => userValidation()}>Enter</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logInfo: state.pageReducer.logged,
})

const mapDispatchToProps = (dispatch) => ({
  enter: () => dispatch(loginAction())
})

export default connect (mapStateToProps, mapDispatchToProps) (Login);



# Func handleChange Genérica
const handleChange = ({target}) => {
      const { name } = target
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({ [name]: value})
}
