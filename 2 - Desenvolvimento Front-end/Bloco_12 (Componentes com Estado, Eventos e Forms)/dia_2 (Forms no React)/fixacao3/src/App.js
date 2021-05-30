import React, { Component } from 'react';
import './App.css';
import InputComp from './input'

class App extends Component {
  
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      nome: '',
      email: '',
      cargo: '',
      inicio: 0,
      viagem: undefined
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox'? target.checked : target.value
    this.setState({
      [ name ]: value,
    })
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            My Forms 3
          </h1>
        </header>
        <forms>
          <fieldset>
            <InputComp keyName={'nome'} ask={'Nome: '} func={this.handleChange} placeholder={'Nome Completo'} value ={this.state.nome} maxC={60} noSpecialC={'s'}/>
            <InputComp keyName={'email'} ask={'E-mail: '} func={this.handleChange} placeholder={'E-mail'} value ={this.state.email} maxC={50}/>
            <InputComp keyName={'cargo'} ask={'Cargo: '} func={this.handleChange} placeholder={'Cargo Atual'} value ={this.state.cargo} maxC={40} noSpecialC={'s'}/>
            <InputComp type={'date'} keyName={'inicio'} ask={'Início: '} func={this.handleChange} className={'data'} value ={this.state.inicio}/>
            <InputComp type={'checkbox'} keyName={'viagem'} ask={'Disponível para viagem: '} func={this.handleChange} className={'checkbox'} value ={this.state.viagem}/>
          </fieldset>
        </forms>
      </div>
    );
  }
}

export default App;
