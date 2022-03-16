import * as length from "./length"
import * as mass from "./mass"
import * as capacity from "./capacity"
import * as area from "./area"
import * as volume from "./volume"
import readline from 'readline-sync'

// Exercício 1:
console.log(`Converte 200 dm em km: ${length.convert(200, 'dm', 'km')}`)
console.log(`Converte 1 cm em km: ${length.convert(1, 'cm', 'km')}`)
console.log(`Converte 1 km em m: ${length.convert(1, 'km', 'm')}`)
console.log(`Converte 500 m em c: ${length.convert(500, 'm', 'cm')}`)
let value: number = Number(readline.question("Type value to convert "))
let unitToConvert: string = readline.question("Type unit to convert ")
let unitWanted: string = readline.question("Type unit wanted ")
console.log(
  `${value}${unitToConvert} é igual a ${length.convert(value, unitToConvert, unitWanted)}`
)
console.log(`\n`)

// Exercício 2:
console.log(`Converte 200 g em kg: ${mass.convert(200, 'dg', 'kg')}`)
console.log(`Converte 1 cg eg kg: ${mass.convert(1, 'cg', 'kg')}`)
console.log(`Converte 1 kg eg g: ${mass.convert(1, 'kg', 'g')}`)
console.log(`Converte 500 g eg c: ${mass.convert(500, 'g', 'cg')}`)
console.log(`\n`)

// Exercício 3:
console.log(`Converte 200 l em kl: ${capacity.convert(200, 'dl', 'kl')}`)
console.log(`Converte 1 cl el kl: ${capacity.convert(1, 'cl', 'kl')}`)
console.log(`Converte 1 kl el l: ${capacity.convert(1, 'kl', 'l')}`)
console.log(`Converte 500 l el c: ${capacity.convert(500, 'l', 'cl')}`)
console.log(`\n`)

// Exercício 4:
console.log(`Converte 200 dm² em km²: ${area.convert(200, 'dm²', 'km²')}`)
console.log(`Converte 1 cm² em km²: ${area.convert(1, 'cm²', 'km²')}`)
console.log(`Converte 1 km² em m²: ${area.convert(1, 'km²', 'm²')}`)
console.log(`Converte 500 m² em c²: ${area.convert(500, 'm²', 'cm²')}`)
console.log(`\n`)

// Exercício 5:
console.log(`Converte 200 dm³ em km³: ${volume.convert(200, 'dm³', 'km³')}`)
console.log(`Converte 1 cm³ em km³: ${volume.convert(1, 'cm³', 'km³')}`)
console.log(`Converte 1 km³ em m³: ${volume.convert(1, 'km³', 'm³')}`)
console.log(`Converte 500 m³ em c³: ${volume.convert(500, 'm³', 'cm³')}`)
console.log(`\n`)

// Exercicio 7:
// instalar readline-sync:
//    npm i readline-sync
// instalar os types
//    npm install -D @types/readline-sync
// Adicionar uma questão inputada a cada arquivo