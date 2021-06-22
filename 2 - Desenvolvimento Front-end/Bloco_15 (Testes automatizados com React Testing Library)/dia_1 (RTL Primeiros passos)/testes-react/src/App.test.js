import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// 1 - CONFIG INICIAL => TESTE PARA PARTE 1 NO App.js
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// 2 - AGORA O RETORNO DO RENDER É ARMAZENADO EM UMA CONST QUE SERÁ UTILIZADA PARA OS TESTES => TESTE PARA PARTE 1 NO App.js
// test('renders learn react link', () => {
//   const meuApp = render(<App />);
//   const linkElement = meuApp.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// 3 - OTIMIZAÇÃO DESESTRUTURANDO MEU APP => TESTE PARA PARTE 1 NO App.js
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// 4 - VERIFICA SE HÁ 1 BTN => TESTE PARA PARTE 2 NO App.js
// test('Verificando se existe o campo Email.', () => {
//   const { getByLabelText } = render(<App />);
//   const inputEmail = getByLabelText('Email');
//   expect(inputEmail).toBeInTheDocument();
//   expect(inputEmail.type).toBe('email');
// });

// test('Verificando se existe um botão', () => {
//   const { getByRole } = render(<App />);
//   const btn = getByRole('button');
//   expect(btn).toBeInTheDocument();
// });

// // 5 - VERIFICA SE N BOTÕES É IGUAL A 2 => TESTE PARA PARTE 3 NO App.js
// test('Verificando se existe o campo Email.', () => {
//   const { getByLabelText } = render(<App />);
//   const inputEmail = getByLabelText('Email');
//   expect(inputEmail).toBeInTheDocument();
//   expect(inputEmail.type).toBe('email');
// });

// test('Verificando se existe dois botões', () => {
//   const { getAllByRole } = render(<App />);
//   const buttons = getAllByRole('button');
//   expect(buttons.length).toBe(2);
// });

// 6 - FINALIZA OS TESTES SEM AÇÃO => TESTE PARA PARTE 3 NO App.js

// test('Verificando se existe o campo Email.', () => {
//   const { getByLabelText } = render(<App />);
//   const inputEmail = getByLabelText('Email');
//   expect(inputEmail).toBeInTheDocument();
//   expect(inputEmail.type).toBe('email');
// });

// test('Verificando se existe um botão de enviar', () => {
//   const { getByTestId } = render(<App />);
//   const btn = getByTestId('id-send');
//   expect(btn).toBeInTheDocument();
//   expect(btn.type).toBe('button');
//   expect(btn).toHaveValue('Enviar');
// });

// test('Verificando se existe dois botões', () => {
//   const { getAllByRole } = render(<App />);
//   const btn = getAllByRole('button');
//   expect(btn.length).toBe(2);
// });

test('Verificando se o botão e o campo email estão funcionando.', () => {
  const { getByTestId, getByLabelText } = render(<App />);

  const EMAIL_USER = 'email@email.com';

  // POSIÇÃO ANTES DE CONDICIONAR A RENDERIZAÇÃO
  // const textEmail = getByTestId('id-email-user');
  // expect(textEmail).toBeInTheDocument();
  // expect(textEmail).toHaveTextContent('Valor:');


  // AJUSTA A EXPECTIVA COM .NOT
  // const textEmail = getByTestId('id-email-user');
  // expect(textEmail).not.toBeInTheDocument();
  // expect(textEmail).not.toHaveTextContent('Valor:');

  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);
  // NESSA NOVA POSIÇÃO, A CAPTURA OCORRE APENAS APÓS O FIREEVENT, NÃO QUEBRANDO O TESTE
  const textEmail = getByTestId('id-email-user');
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});

