const INITIAL_STATE = {
  logged: true,
  clients: [{id: 4, name: 'Lucas'}, {id: 5, name: 'Rodrigo'}],
  filter: '',
  previusState: null,
  id: 1,
};

const LOGIN = 'LOGIN'
const LOGOFF = 'LOGOFF'
const ADD_CLIENT = 'ADD_CLIENT'

function pageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, logged: true};
    case LOGOFF:
      return {...state, logged: false};
    case ADD_CLIENT:
      return {...state, clients: [...state.clients, action.newClient]}
    default:
      return state;
  }
}

export default pageReducer;