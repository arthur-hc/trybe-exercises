// FUNÇÃO REDUCER AULA 16.1 TURMA 10.1 - A 

// UTILIZOU DIRETAMENTE O REDUCER NO INDEX.HTML PARA SIMPLIFICAR

// SINTAXE BASE PARA APOIO NOS EXERCÍCIOS

// NESTE EXEMPLO, O STATE FOI DEFINIDO DIRETAMENTE COMO 0 PELA SIMPLICIDADE DO EXERCÍCIOS, PORÉM, ELE NORMALMENTE SERÁ UM OBJETO


// Define o formato da action
// O PAYLOAD será o parâmetro da action
// {
//   type: 'ADD_TASK',
//   payload: {
//     text: 'Dar aula de Redux'
//   }
// }

// {
//   type: 'COMPLETE_TASK',
//   payload: {
//     text: 'Dar aula de Redux'
//   }
// }

// O reducer é uma função que retorna o novo valor do meu estado global

// PASSO
// CRIA O CENÁRIO DE ACTIONS POSSÍVEIS
function counterReducer(state = 0, action) {
  switch(action.type) {
    // case 'INCREMENT':
    //   return state +1;
    case 'INCREMENT':
      return state + action.payload.amout;
    // NOVO INCREMENTO QUE O VALOR INCREMENTADO É DEFINIDO POR PARÂMETRO
    case 'DECREMENT':
      return state -1;
    // case 'INCREMENT_10':
    //   return state +10;
    // NÃO SERIA UMA SOLUÇÃO ESCALÁVEL
    default:
      return state;
  }
}


// PASSO
// Cria a store passando o counterReducer
const store = Redux.createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  // ** O ÚLTIMO COMANDO PERMITE A UTILIZAÇÃO DA EXTENSãO PARA VISUALIZAR O REDUX NA APLICAÇÃO
)


// PASSO
// Adiciona a ação de incremento ao botão e envia p/ reducer com dispatch
// document
//   .querySelector('#increment')
//   .addEventListener('click', () => {
//     const incrementAction = {
//       type: 'INCREMENT',
//     };

//     store.dispatch(incrementAction);
//   })

// PASSO, NOVA FUNÇÃO QUE TORNARÁ O INCREMENTO ESCALÁVEL
  document
  .querySelector('#increment')
  .addEventListener('click', () => {
    const incrementAction = {
      type: 'INCREMENT',
      payload: {
        amount: 1,
      }
    };

    store.dispatch(incrementAction);
  })

  // PASSO
  // Adiciona a ação de decremento ao botão e envia p/ reducer com dispatch
  document
  .querySelector('#decrement')
  .addEventListener('click', () => {
    const decrementAction = {
      type: 'DECREMENT',
    };

    store.dispatch(decrementAction);
  })

  // PASSO
  // Adiciona a ação de incremento 10 ao botão e envia p/ reducer com dispatch
  document
  .querySelector('#increment-10')
  .addEventListener('click', () => {
    const increment10Action = {
      type: 'INCREMENT',
      payload: {
        amount: 10,
      }
    };

  store.dispatch(increment10Action);
  })

  // PASSO
  // Pede os dados e atualiza a página
  // PS: Nesse caso, é necessário pois está utilizando JS puro. O React realizará automagicamente
  store.subscribe(() => {
    document.querySelector('#value').innerHTML = store.getState();
  })