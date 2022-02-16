// Exercício 4 O código abaixo está em JavaScript . Calcule sua ordem de complexidade para um array de tamanho n .

const numbers = [0,1,2,3,4,5,6,7,8,9]
numbers.map(n => n*n)
       .filter(n => n%2 === 0)
       .reduce((acc, n) => acc + n)

// A Complexidade de tempo será de 0(3n), ou 0(n), pois para cada item será feito 3 operações. Já a Complexidade de espaço será 0(n), pois cada item gerará 1 resultado