export const logoffAction = () => ({type: 'LOGOFF'});

export const loginAction = () => ({type: 'LOGIN'});

export const addClientAction = (newClientInfo) => ({type: 'ADD_CLIENT', newClientInfo})

export const deleteClientAction = (id) => ({type: 'DELETE_CLIENT', id})

export const editClientAction = (editClientInfo) => ({type: 'EDIT_CLIENT', editClientInfo})