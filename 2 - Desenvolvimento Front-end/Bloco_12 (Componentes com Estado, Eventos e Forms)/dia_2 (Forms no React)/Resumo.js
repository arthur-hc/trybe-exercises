// EM UM FORMULÁRIO, O RESPONSÁVEL POR ARMAZENAR AS INFORMAÇÕES SERÁ O STATE
// ARQUIVO APENAS PARA VISUALIZAÇÃO
import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this)
    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
    }
  }
  // Está função, quando disparada, irá setar o valor obtido através do event.target.value no campos estadoFavorito contido no this.state 
  handleTextAreaChange(event) {
    this.setState({ estadoFavorito: event.target.value })
  }

  render() { 
    return ( 
      <div>
        <h1>NÃO IRÁ RENDERIZAR, APENAS UM EXEMPLO</h1>
        <form>
          <label>
            Estado Favorito
            {/* Ao ocorrer mundanças nesse campo, a função handleTextAreaChange é disparada */}
            <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleTextAreaChange}/>
          </label>
        </form>
      </div>
    );
  }
}
 
export default Form;