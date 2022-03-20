"use strict";
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([5, 10, 15, 20]);
numberArray.push(25);
numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação
let stringArray = getArray(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
stringArray.push(30); // Isto vai gerar um erro de compilação
// <=====>
function identity(value, message) {
    console.log(message);
    return value;
}
let returnNumber = identity(100, "Olá");
let returnString = identity("100", "Mundo");
let returnBoolean = identity(true, "Olá, Mundo!");
function processIdentity(value, message) {
    console.log(message);
    return value;
}
let processor = processIdentity;
let returnNumber2 = processor(100, "Olá");
let returnString2 = processor("Olá", 100); // Type check error: Argument of type "string" is not assignable to parameter of type "number".
// <=====>
class ProcessIdentity {
    constructor(value, message) {
        this._value = value;
        this._message = message;
    }
    getIdentity() {
        console.log(this._message);
        return this._value;
    }
}
let processor2 = new ProcessIdentity(100, "Olá");
processor2.getIdentity(); // imprime "Olá" e retorna 100
