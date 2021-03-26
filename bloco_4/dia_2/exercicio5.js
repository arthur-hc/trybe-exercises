let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higherNumber = 0;
for (index = 0; index < numbers.length; index +=1) {
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index]
    }
}
console.log (higherNumber)

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;//