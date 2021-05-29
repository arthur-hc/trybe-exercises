import React, { Component } from 'react';

class SelectPos extends Component {
  render () {
    const { keyName, ask , handleInfo } = this.props
    return (
      <label name={keyName}>{ask}
        <select name={keyName} onChange={handleInfo}>
          <option value={'Goleiro'}>Goleiro</option>
          <option value={'Zagueiro'}>Zagueiro</option>
          <option value={'Lateral'}>Lateral</option>
          <option value={'Volante'}>Volante</option>
          <option value={'Meia'}>Meia</option>
          <option value={'Ponta'}>Ponta</option>
          <option value={'Atacante'}>Atacante</option>
        </select>
      </label>
    )
  }
}

export default SelectPos;