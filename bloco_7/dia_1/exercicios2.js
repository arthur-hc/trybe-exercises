// Função que calcula fatorial
const factor = n => {
    let result = 1
    for (let index = n; index > 0; index -= 1) {
        result += result*(index-1) // Poderia utilizar *= index
    }

    return result
}

console.log(factor(4))

// Bônus gabarito utilizando Tenary operator
const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(4))

// Alternativa index aumentando até n
const factor = n => {
    let result = 1
    for (let index = 1; index <= n; index += 1) {
        result += result*(index-1)
    }
    return result
}

console.log(factor(4))

// Função que retorne a maior palavra

const longestWord = (phrase)=> {
    let words = phrase.split(' ')
    let  longest = ''

    for(let index = 0; index < words.length; index += 1) {
        if (words[index].length > longest.length) {
            longest = words[index]
        }
    }
    
    return console.log(longest)
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

// Sugestão do gabarito utilizando for of

const longestWord = text => {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length
            result = word
        }
    }

    return result
}

// Sugestão do gabarito em 1 linha
// Para mostrar a primeira palavra
const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))

// Para mostra a última palavra
const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[text.split(' ').length -1]

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))