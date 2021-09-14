const { questionInt } = require('readline-sync');

const n = questionInt("Digite um número positivo e maior que 0 para retornar a quantidade da sequência de fibonacci ");

const fibonacci = () => {
  if(n <= 0) return "Número inválido"
  if(n === 1) return [1];
  const nfibos = [0, 1];
  for(let index = 1; nfibos.length <= n; index += 1) {
    let n1 = nfibos[index - 1];
    let n2 = nfibos[index];
    nfibos.push(n1 + n2);
  }

  // P/ remover primeiro item do array
  nfibos.shift();

  return nfibos;
}
console.log(fibonacci());