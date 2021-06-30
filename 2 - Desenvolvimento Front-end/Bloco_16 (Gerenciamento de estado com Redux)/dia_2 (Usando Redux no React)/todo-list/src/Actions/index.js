export const addTaskAction = (task) => ({type: 'ADD_TASK', task});

export const clearAction = () => ({type: 'CLEAR'});

export const clearTodoAction = () => ({type: 'CLEAR_TODO'});

export const clearCompletedAction = () => ({type: 'CLEAR_COMPLETED'})

export const changeFilterAction = (value) => ({type: 'CHANGE_FILTER', value});

export const doneTaskAction = (task) => ({type: 'DONE_TASK', task});

export const unDoneTaskAction = (task) => ({type: 'UNDONE_TASK', task});

export const recoverAction = () => ({type: 'RECOVER'})