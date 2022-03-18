// Exercícios
// Crie uma Enum que represente os dias da semana . Seu valor deve ser número do dia.
// Crie uma Enum que represente as cores do arco iris . Seu valor deve ser o nome das cores em português.
// Crie uma Enum que represente as ações: salvar , imprimir , abrir , visualizar e fechar . Seu valor deve ser do tipo inteiro.
// Crie uma Enum que represente os pontos cardeais: Norte , Leste , Sul e Oeste . Seu valor deve ser a primeira letra do nome do ponto cardial.

enum weekDays {
  sunday = 1,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday
}

enum rainbowCollors {
  red = "vermelho",
  orange = "laranja",
  yellow = "amarelo",
  green = "verde",
  blue = "azul",
  purple = "roxo",
  pink = "rosa"
}

enum functions {
  save,
  print,
  open,
  view,
  close
}

enum directions {
  north = "n",
  east = "e",
  south = "s",
  west = "w"
}

// Week
console.log(weekDays.monday) // Expected 2
console.log(weekDays[4]) // Expected wednesday

// Rainbow
console.log(rainbowCollors.red) // Expected vermelho
console.log(rainbowCollors["red"]) // Expected vermelho

// Functions
console.log(functions.save) // Expected 0
console.log(functions[0]) // Expected vermelho

// Directions
console.log(directions.north) // Expected n
console.log(directions["north"]) // Expected n