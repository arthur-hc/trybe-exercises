// O OBJECT DESTRUCTURING PERMITE EXTRAIR INFORMAÇÕES DE MODO MAIS DINÂMICO
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

//JEITO ATÉ AQUI...
console.log(product.name)

//COM OBJECT DESTRUCTURING...
const {name} = product;
console.log(name);

//ALÉM DO NOME...
const {name, seller} = product;
console.log(name,seller)

//AS O NOME DA VARIAVEL DEVE SER CORRESPONDENTE A CHAVE OU SINALIZAR ISSO
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: name, b: classAssigned, c: subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

//OU ***OBSERVE QUE MESMO QUE CAPTURANDO EM ORDEM DIFERENTE, O ARMAZENADO É O CORRESPONDENTE A CHAVE
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { c, b, a } = student;

console.log(a); // Maria
console.log(b); // Turma B
console.log(c); // Matemática

//COMBINANDO OUTRA FUNÇÃO...
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas