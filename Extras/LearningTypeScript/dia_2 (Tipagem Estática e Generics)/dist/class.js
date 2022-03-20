"use strict";
var EyeColor;
(function (EyeColor) {
    EyeColor["Black"] = "Pretos";
    EyeColor["Blue"] = "Azuis";
    EyeColor["Green"] = "Verdes";
    EyeColor["Brown"] = "Castanhos";
})(EyeColor || (EyeColor = {}));
// usamos a palavra reservada class para definir uma classe
class Person {
    // aprenderemos mais sobre o construtor no próximo bloco
    // considere-o como uma função utilizada para construir um objeto a partir da classe
    // nele recebemos todos os dados necessários para construir um objeto de pessoa
    constructor(name, birthDate, eyeColor) {
        // usamos o this para acessar as propriedades da instância da classe
        // ele representa a própria instância que estamos criando
        // atribuimos o valor do parâmetro recebido a propriedade da instância da classe
        this.name = name;
        this.birthDate = birthDate;
        this.eyeColor = eyeColor;
    }
    speak() {
        console.log(`${this.name} está falando.`);
    }
    eat() {
        console.log(`${this.name} está comendo.`);
    }
    walk() {
        console.log(`${this.name} está andando.`);
    }
}
// usamos a palavra reservada new para criar uma instância de Person
// e passamos os parâmetros necessários para o construtor
const person1 = new Person("Jane Doe", new Date("1986-01-01"), EyeColor.Brown);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);
console.log(person1);
person1.speak();
// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "eyeColor": "Castanhos"
// }
// "Jane Doe está falando."
console.log(person2);
person2.walk();
// saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "eyeColor": "Pretos"
// }
// "Jon Doe está andando."
