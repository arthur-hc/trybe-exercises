//ARRAY DESTRUCT POSSUI A MESMA LÓGICA DO OBJ DESTRUC
// ******MAS NESSE CASO, A ORDEM ARMAZENADA É A QUE CONTA, NÃO A CHAVE DO OBJETO********
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

//EXEMPLO PRÓPRIO
const countries = ['Brazil', 'Japan', 'China', 'Canada'];
const [brasil, japao, china, canada] = countries;
const actions = ['viajar', 'morar', 'explorar', 'amar']
const [viajar, morar, explorar, amar] = actions

const createPhrase = (place, action) => {
  console.log(`${place}, eu vou ${action}`)
}

createPhrase(japao, viajar)

//CORRIJA OS VALORES QUE ESTÃO INCOERENTES
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal]
console.log(comida, animal, bebida); // arroz gato água

//CORRIJA O ARRAY
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
[numerosPares] = [6, 8, 10, 12]
console.log(numerosPares); // [6, 8, 10, 12]

