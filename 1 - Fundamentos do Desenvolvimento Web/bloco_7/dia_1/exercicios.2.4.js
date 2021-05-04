// Função que troca x pela palavra desejada
const exe1 = (phrase, changeBy) => {
    return phrase.replace('x', changeBy)
}

// Array c/ principais skills
const skills = ['JavaScipt', 'HTML', 'CSS','Git', 'SoftSkills'].sort()

// Utiliza a Frase com as skills
const exe2 = (phrase, changeBy) => {
    let completed = `${exe1(phrase, changeBy)}, as minhas principais habilidades são:`
    for (index in skills) {
        completed += ` 
        ${skills[index]}`
    }
    completed += `
        #GoTrybe`
    return  completed
}

console.log(exe2('Tryber x aqui!','Bebeto'))