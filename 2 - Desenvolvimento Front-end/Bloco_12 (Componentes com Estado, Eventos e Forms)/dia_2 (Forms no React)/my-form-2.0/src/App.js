import React, { Component } from 'react';
import InputComp from './input'
import './App.css';
import SelectBrStates from './brazilianStates'

class App extends Component {
  constructor (props) {
    super (props)
    this.handleChange = this.handleChange.bind(this)
    this.startsNum = this.startsNum.bind(this)
    this.state = {
      nome: '',
      email: '',
      CPF: '',
      endereço: '',
      cidade: '',
      estado: undefined,
      tipo: undefined,
      resumo: '',
      cargo: '',
      descriçao: '',
    }
  }
  handleChange ({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox'? target.checked : target.value
    let valueToSet
    if (name === 'nome') {
      valueToSet = value.toUpperCase()
    } else if (name === 'endereço') {
      valueToSet = value.replace(/[!@#$º`%^&~*()_+\-=[\]{};':"\\|,.<>/?]+/, '')
    } else {
      valueToSet = value
    }
    this.setState({
      [name] : valueToSet,
    })
  }

  startsNum ({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox'? target.checked : target.value
    let valueToSet;
    if(name === 'cidade') {
      if(/^[0-9]/.test(value[0])) {
        valueToSet = ''
      } else {
        valueToSet = value
      }
    }
    this.setState({
      [name] : valueToSet,
    })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            My Forms 4
          </h1>
        </header>
        <form>
          <fieldset>
          <InputComp keyName={'nome'} ask={'Nome: '} func={this.handleChange} placeholder={'Nome Completo'} value ={this.state.nome} maxC={40} noSpecialC={'s'}/>
          <InputComp keyName={'email'} ask={'E-mail: '} func={this.handleChange} placeholder={'E-mail'} value ={this.state.email} maxC={50} emailFormat={'s'} type={'email'}/>
          <InputComp keyName={'CPF'} ask={'CPF: '} func={this.handleChange} placeholder={'Apenas números'} value ={this.state.CPF} maxC={11}/>
          <InputComp keyName={'endereço'} ask={'Endereço:'} func={this.handleChange} placeholder={'Endereço'} value ={this.state.endereço} maxC={200}/>
          <InputComp keyName={'cidade'} ask={'Cidade:'} func={this.startsNum} placeholder={'Cidade'} value ={this.state.cidade} maxC={28}/>
          <SelectBrStates keyName={'estado'} ask={'Estado:'} func={this.handleChange}/>
          <label name='tipo'>Tipo de Moradia:
            <input name='tipo' type="radio" value="Casa" onChange={this.handleChange}/>Casa
            <input name='tipo' type="radio" value="Apartamento" onChange={this.handleChange}/>Apartamento
          </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
