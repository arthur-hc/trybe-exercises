type Slices  = 4 | 6 | 8;

type Common = "Calabresa" | "Frango" | "Pepperoni";
type Vegetarian = "Marguerita" | "Palmito" | "Cogumelos";
type Sugar = "Nutela" | "Goiabada com Queijo" | "Marshmallow";

interface Pizza {
    flavor: string,
    slices: Slices
}

const calabresa: Pizza = {
  flavor: "Calabresa",
  slices: 8
}

console.log(calabresa);

const marguerita: Pizza = {
  flavor: "Marguerita",
  slices: 6
}

console.log(marguerita);


const nutela: Pizza = {
  flavor: "Nutela",
  slices: 4
}

console.log(nutela);

interface PizzaCommon extends Pizza {
  flavor: Common
}

interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian
}

interface PizzaVegetarian extends Pizza {
    flavor: Vegetarian
}

interface PizzaSugar extends Pizza {
  flavor: Sugar,
  slices: 4
}

// Exercicio 7
const calabresa2: PizzaCommon = {
  flavor: "Calabresa",
  slices: 6
}

console.log(calabresa);

const frango: PizzaCommon = {
  flavor: "Frango",
  slices: 8
}

console.log(frango);

const pepperoni: PizzaCommon = {
  flavor: "Pepperoni",
  slices: 6
}

console.log(pepperoni);

const margueritaVeg: PizzaVegetarian = {
  flavor: "Marguerita",
  slices: 8
}

console.log(marguerita);

const palmito: PizzaVegetarian = {
  flavor: "Palmito",
  slices: 8
}

console.log(palmito);

const goiabadaEQueijo: PizzaSugar = {
  flavor: "Goiabada com Queijo",
  slices: 4
}

console.log(goiabadaEQueijo);
