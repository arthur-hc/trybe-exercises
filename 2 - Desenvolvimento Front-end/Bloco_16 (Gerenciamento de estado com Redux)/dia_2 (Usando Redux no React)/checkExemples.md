# Checklist react-redux: Passo a passo para guardar no coração e colar na parede
- npx create-react-app my-app-redux;
- npm install --save redux react-redux;
- npm install.

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

# Criar dentro do diretório reducers:
- arquivo index.js.
Exemplo de index
import { combineReducers } from "redux";
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

# Criar dentro do diretório store:
- arquivo index.js.

Exemplo de Store

import { createStore } from 'redux'
import rootReducer from '../Reducers'

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;

# Em src/index.js: (O EXEMPLO ESTARÁ NO PASSO BROWSER ROUTER)
- definir o Provider, <Provider store={ store }> , para fornecer os estados à todos os componentes encapsulados em <App /> .

# Se a sua aplicação não terá outras páginas, não é necessário configurar as rotas. Caso contrário:
- npm install react-router-dom;

# Em src/index.js: (BROWSER ROUTER)
- definir o BrowserRouter, <BrowserRouter> .
Exemplo:
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


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

