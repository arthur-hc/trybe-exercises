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

// CRIANDO A FUNÇÃO DE FORMA GENÉRICA
// PRIMEIRO, DESESTRUTURA O EVENT.TARGET => { TARGET } 
handleChange({ target }) {
  // IRÁ UTILIZAR O NAME DO CAMPO(ex: estadoFavorito PS: É o que está sendo indicado dentro do textarea)
  const { name } = target;
  // IRÁ ARMAZENAR O VALUE
  // CASO SEJA DO TIPO CHECKBOX O CAMINHO É TARGET.CHECKED : SE NÃO O CAMINHO É TARGET.VALUE
  // NA CONST VALUE, SERÁ ARMAZENADO O VALOR OBTIDO ATRAVÉS DE UM DOS CAMINHOS
  const value = target.type === 'checkbox' ? target.checked : target.value;

  // COMO O NAME NO CAMPO É O MESMO QUE ESTA NO STATE, É POSSÍVEL FAZER A INTERPOLAÇÃO
  // OU SEJA NO CASO DO Estado Favorito o name do campo será setado no stade, entretanto, como ele já possui uma key com esse mesmo nome, não haverá diferença. Apenas será dada um novo valor que será o que foi armazenado em value. 
  this.setState({
    [name]: value,
  });
}

// FUNÇÃO SEM COMENTÁRIOS
handleChange({ target }) {
  const { name } = target;
  const value = target.type === 'checkbox'? target.checked : target.value;
  this.setState({
    [name]: value,
  })
}

// PARA SEPARAR OS COMPONENTES FILHOS DO PAI E TRANSMITIR DADOS ENTRE ELES...

// App.js
import React, { Component } from 'react';
import EstadoFavorito from './EstadoFavorito'

class Form extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
    }
  }
  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox'? target.checked : target.value
    this.setState({ 
      [name]: value 
    })
  }

  render() { 
    return ( 
      <div>
        <h1>NÃO IRÁ RENDERIZAR, APENAS UM EXEMPLO</h1>
        <form>
          {/* Agora o componente é chamado e o valor do estadoFav e a Func são passados via props */}
          <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}
 
export default Form;

// NO EstadoFavorito.js
import React, { Component } from 'react';
class EstadoFavorito extends Component {
  render() {
    // o value e a func são resgatadas via props e utilizadas no componente que será devolvido para o elemento pai
    const { value, handleChange } = this.props
    return (
      <label>
        Estado Favorito
        <textarea 
        name="estadoFavorito" 
        // O valor alterado aqui, continuará sendo direcionado para o state
        value={value} 
        // Com alterações, continua sendo dispara do a func
        onChange={ handleChange }
        />
      </label>
    );
  }
}
export default EstadoFavorito;

