const {calcArea, catAndMouse, compareTrue, concatName, decode, encode, fizzBuzz, footballPoints, highestCount, splitSentence,} = require('./challenges')

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