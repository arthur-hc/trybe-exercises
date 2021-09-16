const { expect } = require('chai');

const calculadora = require('../funcoes/calculadora');

describe('Verifica os valores retornados pela calculadora', () => {
  it('retorna 4 utilizando o soma', () => {
    const resposta = calculadora(2, 2, 'soma');

    expect(resposta).to.be.equals(4);
  });
  it('retorna 0 utilizando o subtracao', () => {
    const resposta = calculadora(2, 2, 'subtracao');

    expect(resposta).to.be.equals(0);
  });
  it('retorna 4 utilizando o multiplicacao', () => {
    const resposta = calculadora(2, 2, 'multiplicacao');

    expect(resposta).to.be.equals(4);
  });
  it('retorna 1 utilizando o divisao', () => {
    const resposta = calculadora(2, 2, 'divisao');

    expect(resposta).to.be.equals(1);
  });
});