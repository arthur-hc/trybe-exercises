// Exercícios
// Crie um type para um objeto que represente um pássaro.
// Crie um type que represente uma função que recebe 2 valores numéricos e retorna a soma dos dois.
// Crie um type para um objeto que represente um endereço.

type Bird = {
  wings: number,
  size: string,
}

type Sum = (x: number, y: number) => number;

type Address = {
  street: string,
  nubmer: number,
  neighborhood: string,
  city: string,
  state: string,
}
