// ./exercises.ts

export function greeter(name: string) {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function losangleArea(diagonal1: number, diagonal2: number): number {
  return (diagonal1 * diagonal2) / 2
}

export function trapezeArea(base1: number, base2: number, height: number): number {
  return ((base1 + base2) * height) / 2
}

export function circleArea(radius: number): number {
  return radius * (3.14 ** 2)
}

export let user: { first: string, age: number } = {
  first: "",
  age: 29
}

export let hash = (): void => {
  let hashmap = new Map<number, string>(
    [
      [1, "first"],
      [2, "second"],
      [3, "third"],
    ]
  )

  hashmap.forEach((Element: string, id: number): void => {
    console.log(id, Element)
  })
}

// Para executar o program em ts executar:

// npx tsc

// node ./dist/index.js