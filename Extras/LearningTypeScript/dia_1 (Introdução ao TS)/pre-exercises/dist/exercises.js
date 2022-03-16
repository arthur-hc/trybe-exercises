"use strict";
// ./exercises.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.hash = exports.user = exports.circleArea = exports.trapezeArea = exports.losangleArea = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function losangleArea(diagonal1, diagonal2) {
    return (diagonal1 * diagonal2) / 2;
}
exports.losangleArea = losangleArea;
function trapezeArea(base1, base2, height) {
    return ((base1 + base2) * height) / 2;
}
exports.trapezeArea = trapezeArea;
function circleArea(radius) {
    return radius * (3.14 ** 2);
}
exports.circleArea = circleArea;
exports.user = {
    first: "",
    age: 29
};
let hash = () => {
    let hashmap = new Map([
        [1, "first"],
        [2, "second"],
        [3, "third"],
    ]);
    hashmap.forEach((Element, id) => {
        console.log(id, Element);
    });
};
exports.hash = hash;
// Para executar o program em ts executar:
// npx tsc
// node ./dist/index.js
