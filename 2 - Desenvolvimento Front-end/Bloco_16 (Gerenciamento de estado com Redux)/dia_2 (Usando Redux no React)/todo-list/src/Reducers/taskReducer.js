const INITIAL_STATE = {
  tasksToDo: [],
  tasksCompleted: [],
  filter: '',
  previusState: null,
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
      return {...state, previusState: state, tasksToDo:[...state.tasksToDo, action.task]};
    case CLEAR:
      return {...state, previusState: state, tasksToDo:[], tasksCompleted: []}
    case CLEAR_TODO:
      return {...state, previusState: state, tasksToDo:[]}
    case CLEAR_COMPLETED:
      return {...state, previusState: state, tasksCompleted: []}
    case CHANGE_FILTER:
      return {...state, previusState: state, filter: action.value}
    case DONE_TASK:
      return {...state, previusState: state, tasksToDo: state.tasksToDo.filter((task) => task !== action.task), tasksCompleted: [...state.tasksCompleted, action.task]}
    case UNDONE_TASK:
      return {...state, previusState: state, tasksCompleted: state.tasksCompleted.filter((task) => task !== action.task), tasksToDo: [...state.tasksToDo, action.task]}
      case RECOVER:
        if(state.previusState !== null) {
          return {...state.previusState}
        } else {
          return INITIAL_STATE;
        }
        
    default:
      return state;
  }
}

export default taskReducer;