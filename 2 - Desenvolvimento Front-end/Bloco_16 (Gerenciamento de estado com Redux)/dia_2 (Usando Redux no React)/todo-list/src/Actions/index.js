export const addTaskAction = (task, id) => ({type: 'ADD_TASK', task, id});

export const clearAction = () => ({type: 'CLEAR'});

export const clearTodoAction = () => ({type: 'CLEAR_TODO'});

export const clearCompletedAction = () => ({type: 'CLEAR_COMPLETED'})

export const changeFilterAction = (value) => ({type: 'CHANGE_FILTER', value});

export const doneTaskAction = (task, id) => ({type: 'DONE_TASK', task, id});

export const unDoneTaskAction = (task, id) => ({type: 'UNDONE_TASK', task, id});

export const recoverAction = () => ({type: 'RECOVER'})
