function verficaPalindrome1 (palavra){

  let letrasIguais = 0
  let palindromo = true
  let letras = palavra.split ('')
  
  for (index = 0; index < letras.length; index +=1){
    if (letras[index] === letras[(letras.length - 1)- index]) {
        letrasIguais +=1
    }

}

  if (palavra.length === letrasIguais) {
    palindromo = true
  } else {
    palindromo = false
  }

  return palindromo
}

console.log(verficaPalindrome1('jabuticaba'))
//Primeira solução encontrada por mim
function verficaPalindrome (palavra) {
  let letras = palavra.split('')
  let palindromo = true
  for (index = 0; index < letras.length; index +=1) {
    if (letras[index] != letras[(letras.length-1) - index]){
      palindromo = false
    }
  }
return palindromo

}
//Solução otimizada trocando a condição === por !=
console.log(verficaPalindrome('arara'))

function verificaPalindrome3(palavra) {
  let arrayLetras = palavra.split('');
  let isPalindrome = true;
  for (let index in arrayLetras) {
    if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

console.log(verificaPalindrome3('ovo'))
//Solução da Trybe utilizando o 'for/in'





//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
//Exemplo de palíndromo: arara .
//verificaPalindrome('arara') ;
//Retorno esperado: true
//verificaPalindrome('desenvolvimento') ;
//Retorno esperado: false