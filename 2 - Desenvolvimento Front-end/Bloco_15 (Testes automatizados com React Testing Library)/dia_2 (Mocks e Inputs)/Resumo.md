# Mocks
Tem a função de aumentar a assertividade dos testes e diminuir a dependência de outros elementos, sejam API`s, funções etc

# Config
Utilzar essa library que monitora as alterações de DOM da página

// NOARQUIVODETESTE.js
import MutationObserver from '@sheerun/mutationobserver-shim';
window.MutationObserver = MutationObserver;


# await vs waitFor
NESSE CASO, O FINDBY POSSUI UM WAITFOR EMBUTIDO, POR ISSO NÃO É NECESSÁRIO USÁ-LO

await findByText('Xablau')

SE UTILIZAR WAITFOR...
await waitFor(() => getByText('Xablau'))


# Desestruturação
render(<App/>)
const botao = screen.getByRole('button')
OU

const { getByRole } = render(<App/>)
const botao = getByRole('button')
