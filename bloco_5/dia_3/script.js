function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days'); //ul pai da lista dias semanais

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index]; //armazena o dia da semana
    const dayListItem = document.createElement('li'); //cria li
    dayListItem.innerHTML = days; //adiciona o texto dia da semana na variável que representa a li

    weekDaysList.appendChild(dayListItem); //coloca dentro da ul a li com o texto dia da semana
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Exercicio 1
function createDaysOfTheMonth() {
    const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let monthDaysList = document.querySelector('#days'); //captura ul pai da lista dias mensais
    
    for (let index = 0; index < dezDays.length; index += 1) {
        let monthDays = dezDays[index]; //armazena o dia do array que será inserido durante o loop
        let monthDaysListItem = document.createElement('li'); // cria li
        monthDaysListItem.innerText = monthDays; // adiciona o texto dia do mes na variável que representa a li
        monthDaysListItem.classList.add('days') // adiciona classe days
        if(monthDays === 24 || (monthDays === 25) || (monthDays === 31)) {
            monthDaysListItem.classList.add('holiday') // adiciona classe holidays aos dias feriados
        }
        if(monthDays === 4 || (monthDays === 11) || (monthDays === 18) || (monthDays === 25)) {
            monthDaysListItem.classList.add('friday') // adiciona classe friday aos dias que são sexta-feira
        }
        monthDaysList.appendChild(monthDaysListItem) //coloca dentro da ul a li com o texto dia da semana
    }
}
createDaysOfTheMonth ()

//exercicio 2
function createHollidayButton() {
    let hollidayButton = document.createElement ('button'); // cria a variável que é responsável pelo botão criado
    hollidayButton.innerText = 'Feriados'; //adciona texto ao botão
    hollidayButton.id = 'btn-holiday'; //adiciona id ao botão
    let buttonsContainer = document.querySelector('.buttons-container'); // captura a <div> buttons-container e armazena em uma variável
    buttonsContainer.appendChild(hollidayButton); //Insere o botão criado no container 
}
createHollidayButton ()

//exercicio 3
function clickHolidays() {
    let hollidayButton = document.querySelector('#btn-holiday'); //captura o botão Feriados
    hollidayButton.addEventListener('click', function() {
        let holidays = document.querySelectorAll('.holiday') //captura os dias que possuem a classe holiday e armazena na variável holidays em forma de array
        for(let index = 0; index < holidays.length; index += 1) {
            if(holidays[index].style.backgroundColor == ''){
                holidays[index].style.backgroundColor = 'rgb(199,199,199)';
            } else {
                holidays[index].style.backgroundColor = ''
            }
        }
        //Faz um loop no array que tem os dias feriados capturados, atribuindo a eles uma cor caso não tenha, ou removendo caso já tenha
    })
}
clickHolidays ()

//exercicio 4
function createFridays () {
    let fridayButton = document.createElement('button'); //cria a váriavel que armazena um botão
    fridayButton.innerText = 'Sexta-feira'; //adiciona texto no botão
    fridayButton.id = 'btn-friday'; //adiciona id ao botão
    let buttonsContainer = document.querySelector('.buttons-container'); //captura o container pai dos botões
    buttonsContainer.appendChild(fridayButton) //insere o botão sexta-feira criado no container pai dos botões
}
createFridays ()


//exercicio 5
let recoveryFridays = []; // cria um array e armazena os dias que possuem a classe friday
for(let index = 0; index < document.getElementsByClassName('friday').length; index += 1){
    recoveryFridays.push(document.getElementsByClassName('friday')[index].innerText)
}
function clickFridays () {
    let fridayButton = document.querySelector('#btn-friday'); //captura o botão Sexta-feira
    fridayButton.addEventListener('click',function() {
        let fridays = document.getElementsByClassName('friday')
        for(let index = 0; index < fridays.length; index += 1) {
           if(fridays[index].innerText == recoveryFridays[index]) {
               fridays[index].innerText = 'SEXTOU!!!'
           } else {
                fridays[index].innerText = recoveryFridays[index]
           }
        }    
    })
}
clickFridays ()