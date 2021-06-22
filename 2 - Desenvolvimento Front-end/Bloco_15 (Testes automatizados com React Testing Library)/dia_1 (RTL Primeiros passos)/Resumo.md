# React Testing Library
Tem como objetivo testar o coportamento. Verificar se um item aparece ou não na tela é um deles.

# Instalação
A RTL já vem instalada no app. Ela está dentro do App.test.js

# 3 Grandes etapas de um teste
- Acessar os elementos da sua tela
- Interagir com eles (se houver necessidade)
- Fazer seu teste

# No App.test.js
O teste a seguir, verificará se as condições com relação ao input de email são atendidas

test('verifica se há um campo input de email na tela', () => {
  <!-- Etapa 1 - Acessa os elementos da tela. No caso, está renderizando o app e pegando todos elementos labelText -->
  const { getByLabelText } = render(<App />);

  <!-- Captura o campo input com label text = 'Email' -->
  const inputEmail = getByLabelText('Email');

  <!-- Etapa 3 - Verifica se existe o campo capturado e se o seu tipo é o 'email' -->
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email')
});

# getByRole()
- Se houver mais de um item do tipo, quebra
getByRole('button);

# getAllByRole()
- Irá retornar um array com todos do tipo
const { getAllByRole } = render(<App />);
const button = getAllByRole('button');
expect(button.length).toBe(2);

# getByTestId()
- Irá pegar via id.
const { getByTestId } = render(<App />);
const button = getAllByRole('button');
expect(button).toBeinTheDocument();
expect(button).toHaveValue('Enviar');

# Organizando...
Com describe/it separe os testes por tela
describe - cada tela
it - cada teste, interação etc...

# Testes com interação
No contextod da aula...

(3 Grandes Passos)
=> Acessar os elementos da sua tela
1 Fase: recuperar os 3 elementos para interação
- input de digitação (email)
- input botão (enviar)
- local onde será renderizado o email após interação

=> Interagir com eles (se houver necessidade)
2 Fase: fireEvent irá disparár a ação desejada
<!-- Irá disparar um evento no elemento emailInput, inserindo o valor de email -->
fireEvent.change(emailInput, { target: { value: 'meuEmail@trybe.com'} })
<!-- Irá clicar no elemento com nome de sendButton -->
fireEvent.click(sendButton)

=> Fazer seu teste
3 Fase: após o evento, realizar os testes para verificar o comportamento esperado

<!-- Espera-se que o input passe a ficar em branco -->
expect(emailInput.value).toBe('')

<!-- Espera-se que o componete contenha esse valor -->
expect(userEmail.textContent).toBe('Valor: meuEmail@trybe.com')


