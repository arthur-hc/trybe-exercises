"use strict";
// Exercícios
// Crie uma classe cujo objeto represente um Cachorro.
// Crie uma classe cujo objeto represente uma Casa.
// Crie uma classe cujo objeto represente um Voo.
class Dog {
    // COM interface, não é necessário tipar dentro da classe
    // name: string
    // age: number
    // breed: string
    constructor(name, age, breed) {
        this.name = name,
            this.age = age,
            this.breed = breed;
    }
    bark() {
        console.log(`${this.name} is barking`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    playWith(person) {
        console.log(`${this.name} is playing with ${person}`);
    }
}
const Ozzy = new Dog("Ozzy", 8, "Labrador");
Ozzy.bark();
Ozzy.sleep();
Ozzy.playWith("Arthur");
console.log(Ozzy);
class House {
    constructor(address, size, price) {
        this.address = address,
            this.size = size,
            this.price = price;
    }
    getAddress() {
        console.log(this.address);
    }
    getSize() {
        console.log(this.size);
    }
    getPrice() {
        console.log(this.price);
    }
}
class Flight {
    constructor(number, company, from, to) {
        this.number = number,
            this.company = company,
            this.from = from,
            this.to = to;
    }
    getFlightInfo(customer) {
        console.log(`
      Hi, ${customer},
      your flight ${this.number} is with company ${this.company},
      from ${this.from}
      to ${this.to}
    `);
    }
}
