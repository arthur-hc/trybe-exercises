const selectStates = document.querySelector('#select-state')
const states = ['AC',  'AL',  'AP',  'AM',  'BA',  'CE',  'DF',  'ES',  'GO',  'MA',  'MT',  'MS',  'MG',  'PA',  'PB',  'PR',  'PE',  'PI',  'RJ',  'RN',  'RS',  'RO',  'RR',  'SC',  'SP',  'SE',  'TO']

  //Criar options
function insertStates() {
    for (let index = 0; index < states.length; index += 1) {
    stateToAdd = document.createElement('option')
    stateToAdd.value = states[index].toLowerCase()
    stateToAdd.text = states[index]
    selectStates.add(stateToAdd)
  }
}
insertStates()