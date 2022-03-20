"use strict";
let employee = {
    firstName: "John",
    lastName: "Doe",
    fullName() {
        return this.firstName + " " + this.lastName; // usamos o "this" para acessar as propriedades da interface
    }
};
employee.firstName = 10; // Error: Type "number" is not assignable to type "string"
let teacher = {
    firstName: "John",
    lastName: "Doe",
    subject: "Matemática",
    fullName() {
        return this.firstName + " " + this.lastName;
    },
    sayHello() {
        return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
    }
};
