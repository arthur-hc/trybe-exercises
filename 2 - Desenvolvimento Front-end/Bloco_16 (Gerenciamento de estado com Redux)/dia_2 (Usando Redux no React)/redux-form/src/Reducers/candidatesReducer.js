const INITIAL_STATE = {
  candidates: [],
  previusState: null,
  filter: '',
}

const REGISTER = 'REGISTER'
const REMOVE = 'REMOVE'
const RECOVER = 'RECOVER'

function candidatesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER:
      return {...state, previusState: state, candidates: [...state.candidates, action.candidate]}
    case REMOVE:
      return {...state, previusState: state, candidates: state.candidates.filter((canditate) => canditate.cpf !== action.cpf)}
    case RECOVER:
      if(state.previusState) {
        return {...state.previusState}
      } else {
        return INITIAL_STATE;
      }
    default:
      return state
  }
}

export default candidatesReducer;
