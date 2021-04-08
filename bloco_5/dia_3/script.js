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