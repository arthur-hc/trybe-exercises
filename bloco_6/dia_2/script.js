const selectStates = document.querySelector('#select-state');
const states = ['Selecione o Estado', 'AC',  'AL',  'AP',  'AM',  'BA',  'CE',  'DF',  'ES',  'GO',  'MA',  'MT',  'MS',  'MG',  'PA',  'PB',  'PR',  'PE',  'PI',  'RJ',  'RN',  'RS',  'RO',  'RR',  'SC',  'SP',  'SE',  'TO'];
const preventDefault = document.querySelector('#default');
const dataUser = document.querySelector('#form-data');
const submitButton = document.querySelector('#button-submit');
const deleteButton = document.querySelector('#button-deleteAll')

  //Criar options
function insertStates() {
    for (let index = 0; index < states.length; index += 1) {
    stateToAdd = document.createElement('option');
    stateToAdd.value = states[index].toLowerCase();
    stateToAdd.text = states[index];
    selectStates.add(stateToAdd);
  }
}

function checkEmail() {
  const email = document.querySelector('#input-email');
  let insertedEmail = email.value;
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(insertedEmail);
  if (!emailFormat) {
    email.value = '';
    alert('email inválido');
    return false;
  }
  return emailFormat
}

function renderCurriculum(event) {
  event.preventDefault();
  const formElements = document.querySelectorAll('input');
  if (checkEmail()) {
    for (let index = 0; index < formElements.length; index += 1) {
      const userInput = formElements[index].value;
        const div = document.createElement('div');
        div.className = 'div-curriculum';
        div.innerHTML = userInput;
        dataUser.appendChild(div);
        dataUser.classList.add('box')
    }
  }
}

function deleteResume() {
  allItems = document.querySelectorAll('.div-curriculum')
  for (index = 0; index < allItems.length; index += 1){
    allItems[index].remove()
  }
}

submitButton.addEventListener('click', renderCurriculum);
deleteButton.addEventListener('click', deleteResume)

window.onload = function() {
  insertStates()
}

let picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      // dateString is the result of `toString` method
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});