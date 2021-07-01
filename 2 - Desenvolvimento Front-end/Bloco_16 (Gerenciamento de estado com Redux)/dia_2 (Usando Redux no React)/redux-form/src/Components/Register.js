import React from 'react'
import InputComp from './Input'
import SelectBrStates from './brazilianStates'
import { connect } from 'react-redux';
import { registerAction } from '../Actions'

class Register extends React.Component {
  constructor (props) {
    super (props)
    this.handleChange = this.handleChange.bind(this)
    this.startsNum = this.startsNum.bind(this)
    
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      estado: undefined,
      tipo: undefined,
      resumo: '',
      cargo: '',
      description: '',
    };
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

  render() {
    const { register } = this.props;
    const clickRegister = () => {
      const {nome, email, cpf, endereço, cidade, estado, tipo} = this.state
      const candidateInfo = {
        nome, email, cpf, endereço, cidade, estado, tipo
      }
      register (candidateInfo)
      this.setState({
        nome: '',
        email: '',
        cpf: '',
        endereço: '',
        cidade: '',
        estado: undefined,
        tipo: undefined,
        resumo: '',
        cargo: '',
        description: '',
      })
    }
    return (
      <div>
        <h1>Registrar Candidato</h1>
        <form>
          <fieldset>
          <InputComp keyName={'nome'} ask={'Nome: '} func={this.handleChange} placeholder={'Nome Completo'} value ={this.state.nome} maxC={40} noSpecialC={'s'}/>
          <InputComp keyName={'email'} ask={'E-mail: '} func={this.handleChange} placeholder={'E-mail'} value ={this.state.email} maxC={50} emailFormat={'s'} type={'email'}/>
          <InputComp keyName={'cpf'} ask={'CPF: '} func={this.handleChange} placeholder={'Apenas números'} value ={this.state.cpf} maxC={11}/>
          <InputComp keyName={'endereço'} ask={'Endereço:'} func={this.handleChange} placeholder={'Endereço'} value ={this.state.endereço} maxC={200}/>
          <InputComp keyName={'cidade'} ask={'Cidade:'} func={this.startsNum} placeholder={'Cidade'} value ={this.state.cidade} maxC={28}/>
          <SelectBrStates keyName={'estado'} ask={'Estado:'} func={this.handleChange}/>
          <label name='tipo'>Tipo de Moradia:
            <input name='tipo' type="radio" value="Casa" onChange={this.handleChange}/>Casa
            <input name='tipo' type="radio" value="Apartamento" onChange={this.handleChange}/>Apartamento
          </label>
          </fieldset>
        </form>
        <button type="button" onClick={() => clickRegister()}>Registrar</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  register: (candidateData) => dispatch(registerAction(candidateData))
})

export default connect(null, mapDispatchToProps)(Register)
