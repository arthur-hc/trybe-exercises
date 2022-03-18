"use strict";
// Exercícios
// Crie uma Enum que represente os dias da semana . Seu valor deve ser número do dia.
// Crie uma Enum que represente as cores do arco iris . Seu valor deve ser o nome das cores em português.
// Crie uma Enum que represente as ações: salvar , imprimir , abrir , visualizar e fechar . Seu valor deve ser do tipo inteiro.
// Crie uma Enum que represente os pontos cardeais: Norte , Leste , Sul e Oeste . Seu valor deve ser a primeira letra do nome do ponto cardial.
var weekDays;
(function (weekDays) {
    weekDays[weekDays["sunday"] = 1] = "sunday";
    weekDays[weekDays["monday"] = 2] = "monday";
    weekDays[weekDays["tuesday"] = 3] = "tuesday";
    weekDays[weekDays["wednesday"] = 4] = "wednesday";
    weekDays[weekDays["thursday"] = 5] = "thursday";
    weekDays[weekDays["friday"] = 6] = "friday";
    weekDays[weekDays["saturday"] = 7] = "saturday";
})(weekDays || (weekDays = {}));
var rainbowCollors;
(function (rainbowCollors) {
    rainbowCollors["red"] = "vermelho";
    rainbowCollors["orange"] = "laranja";
    rainbowCollors["yellow"] = "amarelo";
    rainbowCollors["green"] = "verde";
    rainbowCollors["blue"] = "azul";
    rainbowCollors["purple"] = "roxo";
    rainbowCollors["pink"] = "rosa";
})(rainbowCollors || (rainbowCollors = {}));
var functions;
(function (functions) {
    functions[functions["save"] = 0] = "save";
    functions[functions["print"] = 1] = "print";
    functions[functions["open"] = 2] = "open";
    functions[functions["view"] = 3] = "view";
    functions[functions["close"] = 4] = "close";
})(functions || (functions = {}));
var directions;
(function (directions) {
    directions["north"] = "n";
    directions["east"] = "e";
    directions["south"] = "s";
    directions["west"] = "w";
})(directions || (directions = {}));
// Week
console.log(weekDays.monday); // Expected 2
console.log(weekDays[4]); // Expected wednesday
// Rainbow
console.log(rainbowCollors.red); // Expected vermelho
console.log(rainbowCollors["red"]); // Expected vermelho
