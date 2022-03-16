"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const length = __importStar(require("./length"));
const mass = __importStar(require("./mass"));
const capacity = __importStar(require("./capacity"));
const area = __importStar(require("./area"));
const volume = __importStar(require("./volume"));
const readline_sync_1 = __importDefault(require("readline-sync"));
// Exercício 1:
console.log(`Converte 200 dm em km: ${length.convert(200, 'dm', 'km')}`);
console.log(`Converte 1 cm em km: ${length.convert(1, 'cm', 'km')}`);
console.log(`Converte 1 km em m: ${length.convert(1, 'km', 'm')}`);
console.log(`Converte 500 m em c: ${length.convert(500, 'm', 'cm')}`);
let value = Number(readline_sync_1.default.question("Type value to convert"));
let unitToConvert = readline_sync_1.default.question("Type unit to convert");
let unitWanted = readline_sync_1.default.question("Type unit wanted");
console.log(`${value}${unitToConvert} é igual a ${length.convert(value, unitToConvert, unitWanted)}`);
console.log(`\n`);
// Exercício 2:
console.log(`Converte 200 g em kg: ${mass.convert(200, 'dg', 'kg')}`);
console.log(`Converte 1 cg eg kg: ${mass.convert(1, 'cg', 'kg')}`);
console.log(`Converte 1 kg eg g: ${mass.convert(1, 'kg', 'g')}`);
console.log(`Converte 500 g eg c: ${mass.convert(500, 'g', 'cg')}`);
console.log(`\n`);
// Exercício 3:
console.log(`Converte 200 l em kl: ${capacity.convert(200, 'dl', 'kl')}`);
console.log(`Converte 1 cl el kl: ${capacity.convert(1, 'cl', 'kl')}`);
console.log(`Converte 1 kl el l: ${capacity.convert(1, 'kl', 'l')}`);
console.log(`Converte 500 l el c: ${capacity.convert(500, 'l', 'cl')}`);
console.log(`\n`);
// Exercício 4:
console.log(`Converte 200 dm² em km²: ${area.convert(200, 'dm²', 'km²')}`);
console.log(`Converte 1 cm² em km²: ${area.convert(1, 'cm²', 'km²')}`);
console.log(`Converte 1 km² em m²: ${area.convert(1, 'km²', 'm²')}`);
console.log(`Converte 500 m² em c²: ${area.convert(500, 'm²', 'cm²')}`);
console.log(`\n`);
// Exercício 5:
console.log(`Converte 200 dm³ em km³: ${volume.convert(200, 'dm³', 'km³')}`);
console.log(`Converte 1 cm³ em km³: ${volume.convert(1, 'cm³', 'km³')}`);
console.log(`Converte 1 km³ em m³: ${volume.convert(1, 'km³', 'm³')}`);
console.log(`Converte 500 m³ em c³: ${volume.convert(500, 'm³', 'cm³')}`);
console.log(`\n`);
// Exercicio 7:
// instalar readline-sync:
//    npm i readline-sync
// instalar os types
//    npm install -D @types/readline-sync
// Adicionar uma questão inputada a cada arquivo
