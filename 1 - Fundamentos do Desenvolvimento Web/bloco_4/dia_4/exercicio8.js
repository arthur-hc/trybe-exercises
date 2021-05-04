function lowerIndex (valores) {
    let menorIndice = 0
    for (index = 0; index < valores.length; index +=1) {
      if (valores[index] < valores[menorIndice]){
        menorIndice = [index]
      }
    }
    return menorIndice
  }
  
  console.log(lowerIndex([2, 4, 6, 7, 10, 0, -3]))