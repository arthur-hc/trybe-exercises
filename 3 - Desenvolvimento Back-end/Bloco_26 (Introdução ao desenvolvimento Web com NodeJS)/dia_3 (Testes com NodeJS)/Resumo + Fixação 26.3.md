### TESTES EM NODE 26.3 ###

# mocha e chai
- São ferramentas diferentes que se complementam p/ realização de testes. *Tbm é possível com Jest*
  
# *instalando*
- npm install -D mocha chai


# Testes: unitários VS integração VS Ponto-a-ponto

#  *Unitários* => Se limitam a um pequeno fragmento do código. Ex: comportamento de uma func

  const soma = (valorA, valorB) => valorA + valorB;
  module.exports = soma;
  
# *Integração* => Combina múltiplos escopos. Ex:

    const { soma, subtracao, multiplicacao, divisao } = require("./calculo");

    const calculadora = (valorA, valorB, operacao) => {
      switch(operacao) {
        case "soma":
          soma(valorA, valorB);
          break;
        case "subtracao":
          subtracao(valorA, valorB);
          break;
        case "multiplicacao":
          multiplicacao(valorA, valorB);
          break;
        case "divisao":
          divisao(valorA, valorB);
          break;
        default:
          break;
      }
    };

    module.exports = calculadora;

# *Ponto-a-ponto (Fim-a-fim ou End-to-End ou E2E)* => Teste mais completo, que verifica o comportamento durante todo ciclo de execução.
- Baseando nos exemplos anteriores, pode-se abstrair em uma API que utiliza a calculadora para realizar uma operação de venda de produtos. Outro exemplo, são os avaliadores dos projetos de Front-end. Há a suposição que toda cadeia deve estar funcionando p/ renderização das páginas.

# Estrutura básica (relembrando)
describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    //
  });
});

# Adicionando Chai p/ validação
const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovado');
  });
});

*PS: O .to.be é não possui efeito funcional, apenas p/ legilibidade*

# Executando o teste
- npm init # Iniciando o npm

 *É possível instalar o mocha de forma global na máquina, mas não é recomendado*
  *npm install -g mocha*

- Adicionar no scripts do package.json "test": "mocha tests

- npm run test OU npm test

# TDD
- Escrever os testes antes do desenvolvimento evita o retrabalho
- "Se precisar fazer algum ajuste nos testes em algum momento, não se preocupe! Isso é perfeitamente normal, visto que estamos escrevendo testes para código que ainda não existe, e um detalhe ou outro pode escapulir à mente."

# É necessário isolar os testes para testa-los em um BD
- Em back, a maior parte das operações são IO (input, output), seja para ler, escrever, chamadas a API ou consultas. Disponibilizar uma intância de um banco para executar os teste, seria algo complexo, além disso, provavelmente teríamos arquivos alterados, o que também não é nada interessante. Para isso, simula-se um ambiente, no concei de Test Doubes.

# Test Doubles
- São objetos que fingem ser outros p/ fins de teste. Pode-se simular por exemple as funções de fs.

# Sinon
- Ferramente que fornece funções para Test Doubles. Uma delas é o Stub.
  *Stub* => Simula interações c/ dependências externas

  - npm install --save-dev sinon

  *A seguir, a função fs é "coberta" pelo stub, assim, ao ser chamada retornará o valor definido*
  const fs = require('fs');
  const sinon = require('sinon');

  sinon.stub(fs, 'readFileSync')
    .returns('Valor a ser retornado');

# Exemplo pratico que está contido no io-files.test.js
const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const leArquivo = require('./leArquivo');

const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);

describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    describe('a resposta', () => {
      const resposta = leArquivo('arquivo.txt');

      it('é uma string', () => {
        expect(resposta).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    it('a resposta é igual a "null"', () => {
      const resposta = leArquivo('arquivo_que_nao_existe.txt');

      expect(resposta).to.be.equal(null);
    });
  });
});

# ***ATENÇÃO, TESTES QUE ENVOLVEM FUNÇÕES ASYNC, DEVEM SER ASYNC TAMBÉM***
describe('Quando o arquivo existe', () => {
    describe('a resposta', async () => {
      const resposta = await leArquivo('arquivo.txt');

      it('é uma string', () => {
        expect(resposta).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
      });
    });
  });