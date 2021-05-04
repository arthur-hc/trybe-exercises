// First-Class Functions
const product = (productName, price, isOnSale) => ({
  productName,
  price: `R$ ${price}`,
  sale: isOnSale ? 'For sale' : 'Not for sale',
});

console.log(product('Computador', 3000, false));
// { productName: 'Computador', price: 'R$ 3000', sale: 'Not for sale' }

// Higher Order Functions (HOF)
// São funções que utilizam outras funções em suas operações
const button = document.querySelector('#signup-button');

// minha função de primeira classe;
const registerUser = () => {
  // código para registrar a nova pessoa usuária;
  console.log('Registrado com sucesso!');
};

// minha função de segunda classe;
button.addEventListener('click', registerUser);

//Estruturando uma HOF
//Passo 1
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);

//Passo (exemplo) 2
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

//Passo (exemplo) 3
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

//Exercicio Fixação
const wakeUp = () => console.log('Acordando!!');
const takeCoffee = () => console.log('Bora tomar café');
const sleep = () => console.log('Partiu dormir!!');
const doingThings = (action) => action();

doingThings(sleep);
