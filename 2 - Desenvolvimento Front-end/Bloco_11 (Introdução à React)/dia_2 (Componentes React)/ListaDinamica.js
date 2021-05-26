import React from 'react';
// Segue o passo a passo para criar uma lista dinâmica

// Itens
const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];

// Na const items, terá o retorno do map do array shoppingList
// o console log foi adicionado para facilitar a compreensão
const items = shoppingList.map((item) => {
  console.log("item: ", item);
  return (<li>{ item }</li>);
});

// ligando ao React...
// PARA VISUALIZAR, IMPORTE A ListaDinamica NO ARQUIVO App.js E EXECUTE

class ListaDinamica extends React.Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item, index) => {
      console.log("item: ", item);
      return (<li key={ index }>{ item }</li>) ;
    });

    return (
      <div>
        <h2>Lista de compras</h2>
        <ul>
          { items }
        </ul>
      </div>
    );
  }
}

export default ListaDinamica;


// NO MODO INICIAL, FUNCIONARÁ, ENTRETANTO, APARECERÁ UM WARNING NO CONSOLE DEVIDO A FALTA DE KEY. SOLUÇÃO
// const items = shoppingList.map((item, index) => (<li key={ index }>{ item }</li>));