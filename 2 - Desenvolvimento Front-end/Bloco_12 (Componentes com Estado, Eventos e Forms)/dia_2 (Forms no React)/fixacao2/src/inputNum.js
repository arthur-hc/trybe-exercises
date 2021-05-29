import React, { Component } from 'react';

class InputNumComp extends Component {
  render() { 
    const { keyName , value, ask, handleInfo} = this.props;
    return ( 
      <label name={keyName}> {ask}
        <input 
        type='number'
        min='1'
        max='99'
        name={keyName}
        value={value}
        onChange={handleInfo}
        />
      </label>
    );
  }
}
 
export default InputNumComp;