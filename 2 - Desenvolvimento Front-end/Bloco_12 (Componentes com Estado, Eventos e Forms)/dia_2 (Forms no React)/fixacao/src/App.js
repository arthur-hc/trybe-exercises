import React, { Component } from 'react';
import './App.css';
import InputComp from './input'
import TextArea from './textArea';
import CheckBox from './checkBox'

class App extends Component {
  constructor (props) {
    super (props);
    this.handleInfo = this.handleInfo.bind(this)
    this.state = {
      esportistaFavorito: '',
      modalidade: '',
      emAtividade: false,
      motivo: '',
    }
  }
  
  handleInfo ( {target} ) {
    const { name } = target;
    const value = target.type === 'checkbox'? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          My Form
        </header>
        <form>
          <InputComp name={'esportistaFavorito'} value={this.state.esportistaFavorito} ask={"Esportista favorito?"} handleInfo={this.handleInfo}/>
          <InputComp name={'modalidade'} value={this.state.modalidade} ask={"Modalidade?"} handleInfo={this.handleInfo}/>
          <TextArea name={'motivo'} value={this.state.motivo} ask={"Razão?"} handleInfo={this.handleInfo}/>
          <CheckBox name={'emAtividade'} value={this.state.emAtividade} ask={"Em atividade?"} handleInfo={this.handleInfo}/>
        </form>
      </div>
    );
  }
}

export default App;
