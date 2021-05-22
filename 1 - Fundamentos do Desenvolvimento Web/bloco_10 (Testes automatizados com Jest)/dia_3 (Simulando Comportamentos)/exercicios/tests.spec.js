let { randomNum, wordToUpper, firstLetter, joinWords, dogApi } = require('./func')

describe('testes da func randomNum contidas no arquivo func (exercicios 1 - 3)', () => {
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
    randomNum.mockImplementation((a, b) => a / b); // c/ mockImplementationOnce ñ seria necessário mockReset()
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

jest.mock('./func');
describe('testes das outras funções no arq func (exercicio 4)', () => {
  it('teste wordToUpper', () => {
    expect.assertions(2);
    expect(wordToUpper('teste')).toEqual(undefined)
    wordToUpper = jest.fn().mockImplementation((word) => word.toLowerCase());
    expect(wordToUpper('TesTE')).toEqual('teste');
  })
  it('teste firstLetter', () => {
    expect.assertions(2);
    expect(firstLetter('teste')).toEqual(undefined);
    firstLetter = jest.fn().mockImplementation((word) => word[word.length - 1]);
    expect(firstLetter('teste')).toEqual('e');
  })
  it('teste joinWords', () => {
    expect.assertions(2);
    expect(joinWords('teste', 'teste2', 'teste3')).toEqual(undefined);
    joinWords = jest.fn().mockImplementation((w1, w2, w3) => w1.concat(w2, w3));
    expect(joinWords('w1','w2', 'w3')).toEqual('w1w2w3');
  })
})