import { render, screen } from '@testing-library/react';
import App from './App';

test('verifica que, quando recebo uma piada, mostro ela na tela', async () => {
  const joke = {
    id: '7h3oGtr0fxc',
    joke: 'Whiteboards... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  })
  
  const { findByText } = render(<App />);
  await findByText('Whiteboards... are remarkable.')
  
});

