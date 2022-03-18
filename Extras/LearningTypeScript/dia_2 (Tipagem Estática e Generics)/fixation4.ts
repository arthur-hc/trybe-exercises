// Exercícios
// Crie uma classe cujo objeto represente um Cachorro.
// Crie uma classe cujo objeto represente uma Casa.
// Crie uma classe cujo objeto represente um Voo.

interface Dog {
  name: string
  age: number
  breed: string
  playWith(person: string): void
}

class Dog {
  // COM interface, não é necessário tipar dentro da classe
  // name: string
  // age: number
  // breed: string

  constructor(name: string, age: number, breed: string) {
    this.name = name,
    this.age = age,
    this.breed = breed
  }

  bark(): void {
    console.log(`${this.name} is barking`)
  }

  sleep(): void {
    console.log(`${this.name} is sleeping`)
  }

  playWith(person: string): void {
    console.log(`${this.name} is playing with ${person}`)
  }
}

const Ozzy = new Dog("Ozzy", 8, "Labrador")
Ozzy.bark();
Ozzy.sleep();
Ozzy.playWith("Arthur");
console.log(Ozzy)

type Size = "Small"| "Medium" | "Big"

class House {
  address: Address
  size: string
  price: number

  constructor(address: Address, size: string, price: number) {
    this.address = address,
    this.size = size,
    this.price = price
  }

  getAddress(): void {
    console.log(this.address)
  }

  getSize(): void {
    console.log(this.size)
  }

  getPrice(): void {
    console.log(this.price)
  }
}

interface Flight {
  number: number
  company: string
  from: string
  to: string
  getFlightInfo(client: string): void
}

class Flight {
  constructor(number: number,  company: string, from: string, to: string) {
    this.number = number,
    this.company = company,
    this.from = from,
    this.to = to
  }

  getFlightInfo(customer: string): void {
    console.log(`
      Hi, ${customer},
      your flight ${this.number} is with company ${this.company},
      from ${this.from}
      to ${this.to}
    `)
  }
}