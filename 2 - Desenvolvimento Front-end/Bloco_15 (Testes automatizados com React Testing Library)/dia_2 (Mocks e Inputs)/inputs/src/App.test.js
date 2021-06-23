// import React from 'react';
// import { render, fireEvent } from '@testing-library/react'
// import App from './App';

// it('alterando o valor dos campos e testando o valor guardado', () => {
//   const { getByTestId } = render(<App />);
//   const inputNome = getByTestId('input-nome');
//   expect(inputNome).toHaveValue('');
//   fireEvent.change(inputNome, { target: { value: 'Estudante da Trybe' } });
//   expect(inputNome).toHaveValue('Estudante da Trybe');

//   const inputEmail = getByTestId('input-email');
//   expect(inputEmail).toHaveValue('');
//   fireEvent.change(inputEmail, { target: { value: 'estudante@trybe.com' } });
//   expect(inputEmail).toHaveValue('estudante@trybe.com');
// });

// OLHAR EXEMPLO FRANK COM User.event

//TESTANDO...
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

test('renders learn react link', () => {
  render(<App />);
  const titulo = screen.getByText(/Teste de inputs/i)
  expect(titulo).toBeInTheDocument();
  const name = screen.getByLabelText('Nome:');
  expect(name).toBeInTheDocument();
  const inputNome = screen.getByTestId('input-nome')
  expect(inputNome).toHaveValue('')
  const inputEmail = screen.getByTestId('input-email');
  expect(inputEmail).toHaveValue('');
  userEvent.type(inputEmail, 'estudante@trybe.com')
  expect(inputEmail).toHaveValue('estudante@trybe.com')

});
