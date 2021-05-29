import React, { Component } from 'react';

class CheckBox extends Component {
  render() {
    const { ask, name, value, handleInfo } = this.props
    return (
      <label> {ask}
        <input type="checkbox" 
        name={name}
        value={value}
        onChange={handleInfo}
        />
      </label>
    )
  }
}

export default CheckBox