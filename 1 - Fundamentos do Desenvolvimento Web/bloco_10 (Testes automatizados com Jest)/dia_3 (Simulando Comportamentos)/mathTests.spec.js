let {subtrair, somar, multiplicar, dividir } = require('./math')

describe('testes com mock', () => {
  it('mockar subtrair', () => {
    subtrair = jest.fn().mockImplementation((a, b) => a - b);
    expect.assertions(2);
    expect(subtrair(2, 2)).toEqual(0);
    expect(subtrair).toHaveBeenCalled();
  });
  it('mock multiplicar com retorno 10 e testa a chamada', () => {
    multiplicar = jest.fn().mockImplementation((a , b) => 10);
    expect.assertions(2)
    expect(multiplicar(2, 3)).toEqual(10);
    expect(multiplicar).toHaveBeenCalledTimes(1);
  });
  it('mock somar, testa a chamada e parametros passados', () => {
    somar = jest.fn().mockImplementation((a, b) => a + b)
    // expect.assertions(3);
    expect(somar(1, 2)).toEqual(3);
    expect(somar).toHaveBeenCalled();
    expect(somar).toHaveBeenLastCalledWith(1, 2);
  })
  it('mock dividir com retorno 15, depois 2 e 5', () => {
    expect.assertions(6)
    dividir = jest.fn().mockImplementation((a, b) => 15)
    expect(dividir(10, 2)).toEqual(15)
    dividir.mockReset();
    dividir = jest.fn()
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5)
    expect(dividir(2, 3)).toEqual(2)
    expect(dividir(2, 3)).toEqual(5)
    expect(dividir).toHaveBeenCalled();
    expect(dividir).toHaveBeenLastCalledWith(2, 3);
    expect(dividir).toHaveBeenCalledTimes(2);
  })
  it('mock subtrair', () => {
    expect.assertions(1)
    subtrair = jest.fn().mockReturnValue(20);
    expect(subtrair(2, 3)).toEqual(20);
  })
})