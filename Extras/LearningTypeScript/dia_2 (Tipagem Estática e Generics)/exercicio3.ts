// ./index.ts
// @ts-ignore
import { exit } from "process";
import readline from "readline-sync";
import Months from "./exercicio1"
import Seasons from "./exercicio2"

// @ts-ignore
const monthsNames = Object.values(Months).
// @ts-ignore
    map(item => item);

const choiceMonth = readline.keyInSelect(monthsNames, "Escolha um mês do ano", { cancel: "SAIR" });
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária

if (choiceMonth === -1) {
    console.log("Saindo!");
    exit();
}

const seasonsSouth = {
    [Seasons.Fall]: [Months.march, Months.april, Months.may, Months.june],
    [Seasons.Winter]: [Months.june, Months.july, Months.august, Months.september],
    [Seasons.Spring]: [Months.september, Months.october, Months.november, Months.december],
    [Seasons.Summer]: [Months.december, Months.january, Months.february, Months.march],
}
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também

const seasonsNorth = {
    [Seasons.Spring]: seasonsSouth[Seasons.Fall],
    [Seasons.Summer]: seasonsSouth[Seasons.Winter],
    [Seasons.Fall]: seasonsSouth[Seasons.Spring],
    [Seasons.Winter]: seasonsSouth[Seasons.Summer],
}

const hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério", { cancel: "SAIR" });
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária

if (choiceHemisphere === -1) {
    console.log("Saindo!");
    exit();
}

// @ts-ignore
const month = Object.values(Months)[choiceMonth];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
// @ts-ignore
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere]
// @ts-ignore
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar

    if (months.includes(month)) console.log(seasons);
});