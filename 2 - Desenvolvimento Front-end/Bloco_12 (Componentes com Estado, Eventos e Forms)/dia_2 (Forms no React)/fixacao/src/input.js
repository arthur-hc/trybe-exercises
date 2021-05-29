import React, { Component } from 'react';

class InputComp extends Component {
  render() {
    const { ask, name, value, handleInfo } = this.props
    return (
      <label> {ask}
        <input 
        name={name}
        value={value}
        onChange={handleInfo}
        />
      </label>
    )
  }
}

export default InputComp