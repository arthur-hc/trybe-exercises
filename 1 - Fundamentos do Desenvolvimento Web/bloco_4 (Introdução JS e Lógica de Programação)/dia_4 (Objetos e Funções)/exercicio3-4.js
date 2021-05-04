let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

info ['recorrente'] = 'Sim'

for (let index in info) {
    console.log (index)
}

//Faça um for/in que mostre todas as chaves do objeto.

for (let index in info) {
    console.log (info[index])
}

//Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.