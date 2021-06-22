# Redux
É a ferramente que facilita a transmissão de informações, quebrando a necessidade de se transmitir apenas de pai pra filho, e passando a transmitir de forma direta.

# Store
Grande peça do reduz onde iremos armazenar as informações do Reduz

# Action
Objeto que representa alguma mudança ou alteração que precisa acontecer no State

# Reducer
Entidade separada que receberá os pedidos de atualização do estado e enviará pro store como ele será atualizado

Em resumo: Função que pega o estado atual, pega o estado novo, junta e retorna para o store

### Fluxo ###
Componentes => Action => Recucer => Store => Componentes

# Dispatch
store.dispach()

Função para enviar uma action para o reducer e ocorrer o processamento

store.dispach(action)

# getState
store.getState()

Função para recuperar o estado armazenado no store

