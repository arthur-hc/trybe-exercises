import React, { Component } from 'react';

// ***PARA OBSERVAR CADA FIXAÇÃO, DESCOMENTE APENAS O EXERCÍCIO DESEJADO***

// FIXAÇÃO 1 => funcy-buttons
// 1 - Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!
// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .

//SOLUÇÃO:

// const handleClick1 = () => {
//   console.log('Botão 1')
// }

// const handleClick2 = () => {
//   console.log('Botão 2')
// }

// const handleClick3 = () => {
//   console.log('Botão 3')
// }

// class App extends Component {
//   render() { 
//     return (  
//       <div>
//         <button onClick={handleClick1} >Button 1</button>
//         <button onClick={handleClick2}>Button 2</button>
//         <button onClick={handleClick3}>Button 3</button>
//       </div>
//     );
//   }
// }
 
// export default App;

// FIXAÇÃO 2 => funcy-buttons
// 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!
// 4 - Garanta acesso ao objeto this na função que você declarou.

// SOLUÇÃO:

// Criando func dentro do app
// class App extends Component {
//   constructor() {
//     super();
//     this.handleClick1 = this.handleClick1.bind(this)
//     this.handleClick2 = this.handleClick2.bind(this)
//     this.handleClick3 = this.handleClick3.bind(this)
//   }
//   handleClick1() {
//     console.log(this)
//     console.log('Botão 1')
//   }
//   handleClick2() {
//     console.log(this)
//     console.log('Botão 2')
//   }
//   handleClick3() {
//     console.log(this)
//     console.log('Botão 3')
//   }
//   render() { 
//     return (  
//       <div>
//         <button onClick={this.handleClick1} >Button 1</button>
//         <button onClick={this.handleClick2}>Button 2</button>
//         <button onClick={this.handleClick3}>Button 3</button>
//        </div>
//     );
//   }
// }
// export default App;

// FIXAÇÃO 3 => funcy-buttons
// 5 - Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.
// 🦜 Dica: Uma possibilidade é você definir três chaves, uma para cada botão!
// 6 - Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.
// 7 - Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!

// SOLUÇÃO:

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       numeroDeCliques1: 0,
//       numeroDeCliques2: 0,
//       numeroDeCliques3: 0,
//     }
//     this.handleClick1 = this.handleClick1.bind(this)
//     this.handleClick2 = this.handleClick2.bind(this)
//     this.handleClick3 = this.handleClick3.bind(this)
//   }
//   handleClick1() {
//     this.setState((estadoAnterior, _props) => ({
//       numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
//     }))
//   }
//   handleClick2() {
//     this.setState((estadoAnterior, _props) => ({
//       numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
//     }))
//   }
//   handleClick3() {
//     this.setState((estadoAnterior, _props) => ({
//       numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
//     }))
//   }
//   render() { 
//     return (  
//       <div>
//         <button onClick={this.handleClick1} >{this.state.numeroDeCliques1}</button>
//         <button onClick={this.handleClick2}>{this.state.numeroDeCliques2}</button>
//         <button onClick={this.handleClick3}>{this.state.numeroDeCliques3}</button>
//        </div>
//     );
//   }
// }
// export default App;

// FIXAÇÃO 4 => funcy-buttons
// Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.
// A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique. Faça isso acontecer!

class App extends Component {

  constructor() {
    super();
    this.changeColor1 = this.changeColor1.bind(this)
    this.changeColor2 = this.changeColor2.bind(this)
    this.changeColor3 = this.changeColor3.bind(this)
    this.incrementNum1 = this.incrementNum1.bind(this)
    this.state = {
      bgColor1: 'Green',
      bgColor2: 'Green',
      bgColor3: 'Green',
      counter1: 0,
      counter2: 0,
      counter3: 0,
    }
  }

  incrementNum1 () {
    this.setState((previus, _props) => ({
      counter1: previus.counter1 + 1
    }))
  }

  changeColor1 () {
    this.incrementNum1()
    if(this.state.counter1 % 2 !== 0) {
      this.setState({
        bgColor1: 'green'
      })
    } else {
      this.setState({
        bgColor1:'red'
      })
    }
  }

  incrementNum2 () {
    this.setState((previus, _props) => ({
      counter2: previus.counter2 + 1
    }))
  }

  changeColor2 () {
    this.incrementNum2()
    if(this.state.counter2 % 2 !== 0) {
      this.setState({
        bgColor2: 'green'
      })
    } else {
      this.setState({
        bgColor2:'red'
      })
    }
  }

  incrementNum3 () {
    this.setState((previus, _props) => ({
      counter3: previus.counter3 + 1
    }))
  }

  changeColor3 () {
    this.incrementNum3()
    if(this.state.counter3 % 2 !== 0) {
      this.setState({
        bgColor3: 'green'
      })
    } else {
      this.setState({
        bgColor3:'red'
      })
    }
  }

  render() {
    return (
      <div className="App">
          <button style={{backgroundColor: this.state.bgColor1}}
           onClick={this.changeColor1}>{this.state.counter1}</button>

           <button style={{backgroundColor: this.state.bgColor2}}
           onClick={this.changeColor2}>{this.state.counter2}</button>

           <button style={{backgroundColor: this.state.bgColor3}}
           onClick={this.changeColor3}>{this.state.counter3}</button>
      </div>
    );
  }
}
export default App;