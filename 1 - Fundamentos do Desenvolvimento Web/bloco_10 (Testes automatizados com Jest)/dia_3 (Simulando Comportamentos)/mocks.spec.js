// Mocks servem para garantir que o funcionamento está correto mesmo em comportamentos aleatórios ou quando a base de dados é muito grande e está o tempo se alterando
const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

test('quando o número aleatório é par, a função retorna `true`', () => {
  expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
});

// FUNÇÕES P/ ISSO:
// jest.fn();
// jest.mock();
// jest.spyOn(); 
