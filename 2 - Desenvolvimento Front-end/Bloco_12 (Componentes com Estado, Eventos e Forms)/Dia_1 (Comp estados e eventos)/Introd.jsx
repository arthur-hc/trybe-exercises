// >>>>>>>>>>>> ESTADOS <<<<<<<<<<<<<<

// Estados são formas de armazenar informações para utilização durante a aplicação. No JS comum, para criar um contador, precisariamos de um contador com escopo global, que ao ativar a função, o valor do contador seria atualizado. Entretanto, com React, essa responsabilidade faz mais sentido com os estados. Cada classe possuirá seu próprio estado. 

// Class ValorTotal => Estado Contador-Valor
// Classe 1 => Estado 1
// Classe 2 => Estado 2
// Classe 3 => Estado 3

// Cada classe possuí seu estado



// >>>>>>>>>>>>> EVENTOS <<<<<<<<<<<<<<

// Essa seria uma sintaxe para adicionarmos eventos aos nossos componente. Ainda não é a ideial, mas começa a mostrar elementos que serão utilizados com React. Observe:
import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
function handleClick() {
  console.log('Clicou no botão!')
}

class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return <button onClick={handleClick}>Meu botão</button>
  }
}

export default App;



// FIXAÇÃO 1 => funcy-buttons
// 1 - Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!
// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .



// Para colocar a função para o lado de dentro da classe precisamos:
import React from 'react';
import './App.css';

class App extends React.Component {
  // REMOVE O FUNC, RESTANDO APENAS O NOME E AÇÕES
  handleClick() {
    // ERRO COM THIS COMENTADO NO PRÓXIMO PASSO
    console.log(this)
    console.log('Clicou no botão!')
  }
  render() {
    // ADICONA O THIS ANTES DA FUNC
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;

// No entanto, caso acione o console.log(this) verá que será undefined, apesar de funcionar com handleClick. Isso acontece pois o JS entende que há uma função dentro deste componente na qual ele precisa acessar. No entando, caso precise que esta func acesse propriedades, isso será um problema. 
//SOLUÇÃO
import React, { Component } from 'react';
class App extends Component {
  // Sem entrar em detalhes, estamos alterando a propriedade constructor do React e reescrevendo-a. Ela é sempre executada antes de renderizar.
  constructor() {
    super();
    // Aqui, falaremos que a handleClick irá "enxergar" a função this
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    // NOTE QUE AGORA O THIS MOSTRA TODO SEU CORPO (MUITO ALÉM DE APENAS PROPS)
    console.log(this)
    console.log('Clicou no botão!')
  }
  render() { 
    return (
      <button onClick={this.handleClick}>Meu botão</button>
    );
  }
}
 
export default App;

// !!!!Se você definir uma função da classe com uma arrow function, com a sintaxe minhaFuncao = () => {...} , você não precisará fazer o bind no constructor, mas sua aplicação será menos performática!!!!



// FIXAÇÃO 2 => funcy-buttons
// 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!
// 4 - Garanta acesso ao objeto this na função que você declarou.



// >>>>>>>>>>>> ESTADOS NA PRÁTICA <<<<<<<<<<<<<<
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // DEFINIMOS O ESTADO INICIAL DO ESTADO COM THIS.STATE E SEU ATRIBUTOS
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React*/
    // O CONSTRUCTOR É ASYNC, SENDO ASSIM, PRECISAMOS UTILIZAR O setState QUE TAMBÉM É ASYNC
    this.setState({
      numeroDeCliques: 1
    })
  }

  render() {
    /*Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`*/
    // NA PRÁTICA, O ESTADO INICIAL MOSTRADO SERÁ 0. APÓS O PRIMEIRO CLICK, SERÁ 1
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;

// ADICIONANDO MAIS LÓGICA...
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */

    // AQUI O setState receberá 2 parâmetros. EM RESUMO, O numeroDeCliques será o estadoAnterior.numeroDeCliques + 1. O estadoAnterior é uma propriedade da func setState que buscará a forma anterior de um estado indicado após o '.' => estadoranterior.estadoDesejado
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    // AGORA O ESTADO INICIAL E MOSTRADO NO BOTÃO É 0, MAS A CADA CLICK O VALOR É ATUALIZADO
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;

// 💡 Se você quisesse chamar, no elemento, um evento passando um parâmetro, você deveria trocar a sintaxe <button onClick{this.minhaFuncao} ...> por <button onClick={() => this.minhaFuncao('meu parametro')} . Basicamente, substitua a função do evento por uma chamada à mesma feita via callback! Experimente!

// FIXAÇÃO 3 => funcy-buttons
// 5 - Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.
// 🦜 Dica: Uma possibilidade é você definir três chaves, uma para cada botão!
// 6 - Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.
// 7 - Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!


// >>>>>>>>>>>> STATE VS PROPS <<<<<<<<<<<<<<
// Você pode entender a diferença props vs state da seguinte forma:
// props são uma forma de passar dados de pai para filho.
// state é reservado para dados que seu componente controla.
// O conceito é: state , ou estado do componente, deve servir para guardar valores do Componente que mudam com o uso do mesmo. As props são valores fixos que um componente recebe e não altera.
// Pelos princípios do React você nunca deve tentar alterar o que um componente recebe como props como no exemplo abaixo:
// this.props.name = 'novo nome';

// PROPS => VALORES FIXOS, QUE SERÃO UTILIZADOS E PASSADOS DE PAI P/ FILHO
// ESTADOS => SÃO MUTÁVEIS, INTERATIVOS, DINÂMICOS E CONTROLADOS PELO COMPONENTE

