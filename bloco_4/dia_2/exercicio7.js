let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let lowerNumber = 99999
for (let index =0; index < numbers.length; index +=1) {
    if (lowerNumber > numbers [index]){
        lowerNumber = numbers [index]
    }
}
console.log (lowerNumber)

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;//