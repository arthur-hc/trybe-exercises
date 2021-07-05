const INITIAL_STATE = {
  logged: false,
  clients: [],
  id: 1,
};

const LOGIN = 'LOGIN'
const LOGOFF = 'LOGOFF'
const ADD_CLIENT = 'ADD_CLIENT'
const DELETE_CLIENT = 'DELETE_CLIENT'
const EDIT_CLIENT = 'EDIT_CLIENT'

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
    case EDIT_CLIENT:
      return {...state, clients: [...state.clients.filter((client) => client.id !== action.editClientInfo.id), action.editClientInfo]}
    default:
      return state;
  }
}

export default pageReducer;
