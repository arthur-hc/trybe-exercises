// 1- Crie uma função que recebe três parâmetros retorna uma Promise .
// => Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// => Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// => Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// => Caso o resultado seja maior que 50, resolva a Promise com o valor obtido

const exe1 = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if(typeof a !== "number" || typeof a !== "number" || typeof a !== "number") {
      reject(new Error ("Informe apenas números")) 
    }
    const resultado = (a+b)*c
    
    resultado < 50 
    ? reject(new Error ("Valor muito baixo"))
    : resolve(resultado);
  });

  return promise;
};

// exe1(1, 2, 3)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

module.exports = exe1;