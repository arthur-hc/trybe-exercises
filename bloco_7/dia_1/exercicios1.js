// Simplificar função com arrow function e template lterals
// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

  // Resolução
  
const testingScope = escopo => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ' ótimo, fui utilizada no escopo !'`
        console.log (ifScope);
    } else {
        let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
        console.log (elseScope);
    }
}
testingScope(false);

// Criar função com template literals para devolver o array em ordem crescente
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sort = () => {
   return oddsAndEvens.sort(function(a, b){return a-b})
}
// Seu código aqui.

console.log(`Os números ${sort()} se encontram ordenados de forma crescente !`);

