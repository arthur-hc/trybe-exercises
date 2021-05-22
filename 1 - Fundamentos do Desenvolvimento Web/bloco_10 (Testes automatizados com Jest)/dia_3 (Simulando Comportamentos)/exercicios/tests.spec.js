let { randomNum } = require('./func')

describe('testes das funções contidas no arquivo func', () => {
  it('exercicio 1', () => {
    randomNum = jest.fn().mockReturnValue(10);
    expect.assertions(3);
    expect(randomNum()).toEqual(10);
    expect(randomNum).toHaveBeenCalled();
    expect(randomNum).toHaveBeenCalledTimes(1);
  })
  it('exercicio 2', () => {
    expect.assertions(3);
    randomNum.mockReset();
    randomNum.mockImplementation((a, b) => a / b);
    expect(randomNum(10, 2)).toEqual(5);
    expect(randomNum).toHaveBeenCalledTimes(1);
    randomNum.mockReset();
    expect(randomNum()).toEqual(undefined);
  })
  it('exercicio 3', () => {
    expect.assertions(3)
    randomNum.mockImplementation((a, b, c) => a * b * c);
    expect(randomNum(1, 2, 3)).toEqual(6);
    randomNum.mockReset();
    randomNum.mockImplementation((num) => num * 2);
    expect(randomNum(10)).toEqual(20);
    expect(randomNum(30)).toEqual(60);
  })
})
