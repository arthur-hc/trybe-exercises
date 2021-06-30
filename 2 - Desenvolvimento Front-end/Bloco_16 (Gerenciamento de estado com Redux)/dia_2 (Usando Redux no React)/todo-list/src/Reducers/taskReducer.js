const INITIAL_STATE = [];
const ADD_TASK = 'ADD_TASK';

function taskReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TASK:
      return [...state, action.task];
    default:
      return state;
  }
}

export default taskReducer;