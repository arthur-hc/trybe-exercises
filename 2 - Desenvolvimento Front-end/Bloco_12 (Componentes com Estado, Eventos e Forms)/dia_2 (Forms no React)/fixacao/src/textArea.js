import React, { Component } from 'react';

class TextAreaComp extends Component {
  render() {
    const { ask, name, value, handleInfo } = this.props
    return (
      <label> {ask}
        <textarea 
        name={name}
        value={value}
        onChange={handleInfo}
        />
      </label>
    )
  }
}

export default TextAreaComp