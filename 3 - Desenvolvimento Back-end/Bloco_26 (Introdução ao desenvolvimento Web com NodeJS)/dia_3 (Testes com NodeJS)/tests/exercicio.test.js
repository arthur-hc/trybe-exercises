// Exercício 1 : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
// Essa função irá receber um número como parâmetro e retornar uma string como resposta;
// Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
// Descreva todos os cenário de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.

// Exercício 3 Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo Number .
// Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a Number para a função;
// Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número";
// Implemente em sua função tal validação para que o teste passe.

const { expect } = require('chai');

const statusNumber = require('../funcoes/statusNumber');

describe('Verifica o comportamento da função statusNumber e se', () => {
  describe('o retorno', () => {
    it('é positivo', () => {
      const status = statusNumber(10);
      expect(status).to.be.equal('positivo');
    });

    it('é negativo', () => {
      const status = statusNumber(-10);
      expect(status).to.be.equal('negativo');
    });

    it('é neutro', () => {
      const status = statusNumber(0);
      expect(status).to.be.equal('neutro');
    });
  });

  describe('o retorno, ao passar string', () => {
    it('é null', () => {
      const status = statusNumber('testando');
      expect(status).to.be.equal(null);
    });
  });  
});

// Exercício 4 Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
// Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
// Após concluir a escrita do arquivo ela deverá retornar um ok .
// Descreva todos os cenários de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se o retorno da função possui o valor e tipo esperado.

// Exercício 5 Implemente a função descrita no exercício 4.
// Crie a função descrita no exercício 4 utilizando o módulo fs do node.
// Adapte os testes adicionando stub ao módulo utilizado do fs , isolando assim o teste.
// Garanta que todos os testes escritos no exercício 4 irão passar com sucesso.

const fs = require('fs');
const sinon = require('sinon');
const writeText = require('../funcoes/writeText');


describe('Verifica o comportamento da função writeText e se', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });
  describe('quando o arquivo é criado', () => {
    it('retorna o "ok"', () => {
      const retorno = writeText('arquivo.txt', 'exercicio 4 e 5');
      expect(retorno).to.be.equal('ok');
    });
    it('seu conteúdo é do tipo string', () => {
      const contentType = writeText('arquivo.txt', 'exercicio 4 e 5');
      expect(contentType).to.be.a('string');
    })
  })
})