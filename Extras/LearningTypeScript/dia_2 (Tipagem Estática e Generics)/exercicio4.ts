enum Colors {
  black = "preta",
  white = "branca",
  red = "vermelha",
  silver = "prata"
}

enum Directions {
  LEFT = "Esquerda",
  RIGHT = "Direita",
}

enum Doors {
  DRIVER = "Da pessoa motorista",
  RIDE = "Da pessoa carona",
  BEHIND_DRIVER = "De trás da pessoa motorista",
  BEHIND_RIDE = "De trás da pessoa carona"
}

interface Car {
  brand: string,
  color: Colors,
  doors: number
}

class Car {
  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand
    this.color = color
    this.doors = doors
  }

  turnOn(): void {
    console.log("Ligando carro.");
  }

  turnOff(): void {
      console.log("Desligando carro.");
  }

  turn(direction: Directions): void {
      console.log(`Virando para a ${direction}.`);
  }

  speedUp(): void {
      console.log("Acelerando carro.");
  }

  speedDown(): void {
      console.log("Reduzindo a velocidade do carro.");
  }

  stop(): void {
      console.log("Parando carro.");
  }

  honk(): void {
      console.log("Buzinando: BIP BIP");
  }

  openTheDoor(door: Doors): void {
      console.log(`Abrindo a porta: ${door}.`);
  }

  closeTheDoor(door: Doors): void {
      console.log(`Fechando a porta: ${door}.`);
  }
}

export {
  Car,
  Colors,
  Directions,
  Doors
}