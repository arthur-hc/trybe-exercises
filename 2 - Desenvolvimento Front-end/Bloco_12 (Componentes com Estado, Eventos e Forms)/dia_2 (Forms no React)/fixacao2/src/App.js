import React, { Component } from 'react';
import './App.css';
import InputComp from './input'
import SelectPos from './selectPos'
import InputNumComp from './inputNum'
import CheckBoxComp from './checkBox'

class App extends Component {
  constructor (props) {
    super (props);
    this.handleInfo = this.handleInfo.bind(this)
    this.state = {
      melhorJogador: '',
      apelido: '',
      posicao: undefined,
      pais: '',
      numeroCamisa: undefined,
      goldenBall: 0,
    }
  }
  handleInfo ({ target }) {
    const { name } = target
    const value = target.type === 'checkbox'? target.checked : target.value;
    this.setState({
      [ name ]: value
    })
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          My Forms 2
        </header>
        <form>
            <InputComp keyName={'melhorJogador'} ask={'Melhor jogador de todos os tempos'} handleInfo={this.handleInfo}/>
            <InputComp keyName={'apelido'} value={this.state.keyName} ask={'Apelido'} handleInfo={this.handleInfo}/>
            <SelectPos keyName={'posicao'} ask={'Posição'} handleInfo={this.handleInfo}/>
            <InputComp keyName={'pais'} value={this.state.keyName} ask={'Pais de origem'} handleInfo={this.handleInfo}/>
            <InputNumComp keyName={'numeroCamisa'} ask={'N Camisa'} handleInfo={this.handleInfo}/>
            <CheckBoxComp keyName={'goldenBall'} ask={'Foi eleito melhor do mundo?'} handleInfo={this.handleInfo}/>
        </form>
      </div>
    );
  }
}

export default App;
