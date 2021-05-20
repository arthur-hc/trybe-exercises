const {calcArea, catAndMouse, compareTrue, concatName, decode, encode, fizzBuzz, footballPoints, highestCount, splitSentence,} = require('./challenges')
const { techList, hydrate } = require('./challenges2')

describe('encode e decode tests', () => {
  it('verifica se encode e decode são funções', () => {
    expect('function and function').toEqual(`${typeof encode} and ${typeof decode}`)
  })
  it('verifica se com encode, os parametros a,e,i,o,u são convertidos em 1,2,3,4,5', () => {
    expect('12345').toEqual(encode('aeiou'))
  })
  it('verifica se com decode, os parametros 1,2,3,4,5 são convertidos em a,e,i,o,u', () => {
    expect('aeiou').toEqual(decode('12345'))
  })
  it('verifica se letra outras letras e números não são convertidos', () => {
    expect('bcdf 6789').toEqual(`${encode('bcdf')} ${decode('6789')}`)
  })
  it('verifica se o tamanho dos retornos é o mesmo dos parâmetros', () => {
    expect('5 5').toEqual(`${encode('aeiou').length} ${decode('12345').length}`)
  })
})

describe('techList tests', () => {
  
  it('verifica se a techlist retorna um array com objt e techs', () => {
    expect.assertions(1);
    expect(techList(['HTML', 'CSS'], 'Arthur')).toEqual([ { tech: 'CSS', name: 'Arthur' }, { tech: 'HTML', name: 'Arthur' } ])
  })
  it('verifica se com array vazio, retorna vazio', () => {
    expect.assertions(1);
    expect(techList([], 'Arthur')).toEqual('Vazio!')
  })
})

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});