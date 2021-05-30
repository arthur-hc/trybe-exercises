import React, { Component } from 'react';

class InputComp extends Component {
  render() { 
    const { keyName, ask, value, func, type, className, placeholder, maxC, noSpecialC } = this.props
    let error = undefined
    // Validação por tipo
    // if(value && validation && typeof value ==! validation) error = 'Dado inválido'
    if(value && maxC && value.length > maxC) error = 'Ultrapassou o limite'
    if(value && noSpecialC) {
      const specialC = /[!@#$º`%^&~*()_+\-=[\]{};':"\\|,.<>/?]+/;
      if(specialC.test(value)){
        error = 'Caractere inválido'
      }
    }


    return (
      <label name={keyName}>{ask}
        <input 
        className={className}
        type={type}
        placeholder={placeholder}
        name={keyName}
        onChange={func}
        />
        <span>{(error? error : '')}</span>
      </label>
    );
  }
}
 
export default InputComp;
