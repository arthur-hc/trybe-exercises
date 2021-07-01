const REGISTER = 'REGISTER'
const REMOVE = 'REMOVE'
const RECOVER = 'RECOVER'

export const registerAction = (candidateData) => ({type: REGISTER, candidateData})

export const removeAction = (cpf) => ({type: REMOVE, cpf})

export const recoverAction = () => ({type: RECOVER})