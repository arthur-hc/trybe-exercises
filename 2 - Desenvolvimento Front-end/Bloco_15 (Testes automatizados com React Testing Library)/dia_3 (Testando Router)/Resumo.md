# Diferenças
Ao utilizar browserRouter...

1 - Precisamos importar de outra biblioteca...
- import renderWithRouter from './renderWithRouter';

2 - Para invocar o render nos testes....
- const { getByText } = renderWithRouter(<App />);

E criar o componente renderWithRouter....

//src/renderWithRouter.js
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={history}>{component}</Router>), history,
  });
};

export default renderWithRouter;


3- O que acontece?
- No componente renderWithRouter. que recebe como parâmetro o componente a ser renderizado, será renderizado o componente e embutido um histórico "fake" para não "quebrar a página". Isso acontece pois o Browser Router carrega o histórico de navegação e utiliza em suas funções, em contrapartida, os testes irão carregar esse histórico entre a execução de um e outro, gerando interdepêndencia e quebrando. Por isso, nos testes, essa operação é feita manualmente dentro do componente, gerando um "DOM com histórico fake", e permitindo que a aplicação no ambiente de testes rode, sem quebra da página.

- Essa operação, poderia ser feita a cada teste, porém não é uma boa prática.


OLHAR TESTES PRE AULA PARA ENTENDER MELHOR
>>> COM MÉTODO PUSH, "ENVIAMOS" A URL A PATH DESEJADA
>>> COM history.location.pathname TEMOS O CAMINHO DA URL
>>> PARA EXECUTAR SOMENTE O COMPONENTE, UTILIZAR O MESMO MÉTODO RENDERWITHROUTER PASSANDO O COMPONENTE ESPECÍFICO AO INVÉS DO APP (PS: IMPORTAR DO APP "import App, { About } from './App';")
O About foi importado entre chaves por ser export default