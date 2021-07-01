const REGISTER = 'REGISTER'
const REMOVE = 'REMOVE'
const RECOVER = 'RECOVER'

export const registerAction = (candidate) => ({type: REGISTER, candidate})

export const removeAction = (cpf) => ({type: REMOVE, cpf})

export const recoverAction = () => ({type: RECOVER})