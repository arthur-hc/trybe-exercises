import React, { Component } from 'react';

class InputComp extends Component {
  render() { 
    const { keyName , value, ask, handleInfo} = this.props;
    return ( 
      <label name={keyName}> {ask}
        <input 
        name={keyName}
        value={value}
        onChange={handleInfo}
        />
      </label>
    );
  }
}
 
export default InputComp;