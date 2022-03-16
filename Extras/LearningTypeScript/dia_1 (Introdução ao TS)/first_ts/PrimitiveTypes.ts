// BOLEAN
let yes: boolean = true; // cria uma variável de nome "yes" e diz que o tipo é boleano e o valor é true
let no: boolean = false; // cria uma variável de nome "no" e diz que o tipo é boleano e o valor é false

// NUMBER
// cria uma variável de nome "x" e diz que o tipo é number mas não seta o valor
// isso não funciona com const
let x: number;

let y: number = 0;
let z: number = 123.456;

// STRING
let s: string;
let empty: string = "";
let abc: string = 'abc';

// VOID existe apenas para indicar a ausência de um valor, como em uma função sem valor retornado.
function sayHelloWorld(): void {
  console.log("Hello World!");
}

// NULL E UNDEFINED
let nullValue = null;
let undefinedValue = undefined;

let flag = true; // o compilador irá inferir o tipo boolean
const numberPI = 3.1416; // o compilador irá inferir o tipo number
let message = "Hello World!"; // o compilador irá inferir o tipo string