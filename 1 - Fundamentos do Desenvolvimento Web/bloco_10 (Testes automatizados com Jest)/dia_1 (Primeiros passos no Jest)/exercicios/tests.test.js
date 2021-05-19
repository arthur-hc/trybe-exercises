const sum = require('./exercicio1');
const myRemove = require('./exercicio2');
const myFizzBuzz = require('./exercicio4');
const {obj1, obj2, obj3 } = require('./exercicio5')

describe('exercicio 1', () => {
  it('Verifica se o retorno da func sum, com parâmetros 4 e 5, retorna 9', () => {
    expect(9).toEqual(sum(4,5));
  });
  it('Verifica se o retorno da func sum, com parâmetros 0 e 0, retorna 0', () => {
    expect(0).toEqual(sum(0,0));
  })
  it('Verifica se um erro é lançado se utilizar strings na func sum', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow('parameters must be numbers');
  })
})

describe('exercicio2', () => {
  it('Verifica se ao utilizar a função myRemove, remove o item do array que foram passados como parâmetros', () => {
    const arrayX = [1, 2, 3, 4]
    expect(myRemove(arrayX, 3)).not.toContain(3)
  })
  it('Verifica se ao utilizar a func myRemove, não retorna o array original', () => {
    const arrayX = [1, 2, 3, 4]
    expect(arrayX).not.toEqual(myRemove(arrayX,3))
  })
  it('Verifica se retorna o array esperado', () => {
    const arrayX = [1, 2, 3, 4]
    expect(arrayX).toEqual(myRemove(arrayX, 5))
  })
})

describe('exercicio4', () => {
  it('verifica se com um número divisível por 3 e 5 retorna fizzbuzz', () => {
    expect('fizzbuzz').toEqual(myFizzBuzz(15))
  })
  it('verifica se com um número divisível apenas por 3 retorna fizz', () => {
    expect('fizz').toEqual(myFizzBuzz(3))
  })
  it('verifica se o número divisível apenas por 5 retorna buzz', () => {
    expect('buzz').toEqual(myFizzBuzz(5))
  })
  it('verifica se o número não divisível por 3 e nem por 5, é retornado', () => {
    expect(2).toEqual(myFizzBuzz(2))
  })
  it('verifica se quando passado um param diferente de number, retorna false', () => {
    expect(false).toEqual(myFizzBuzz('a'))
  })
})

describe('exercicio5', () => {
  it('verifica se o obj1 é igual ao obj 2', () => {
    expect(obj1).toEqual(obj2)
  })
  it('verifica se o obj1 é diferente do obj 3', () => {
    expect(obj1).not.toEqual(obj3)
  })
})