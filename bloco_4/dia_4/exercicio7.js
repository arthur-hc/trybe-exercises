
function higherIndex (valores) {
  let maiorIndice = 0
  for (index = 0; index < valores.length; index +=1) {
    if (valores[index] > valores[maiorIndice]){
      maiorIndice = [index]
    }
  }
  return maiorIndice
}

console.log(higherIndex([2,23,6,7,10,1]))