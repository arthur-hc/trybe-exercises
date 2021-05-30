import React, { Component } from 'react';

class InputFileComp extends Component {
  render() { 
    const { keyName , value, ask, handleInfo} = this.props;
    return ( 
      <label name={keyName}> {ask}
        <input
        type="file"
        name={keyName}
        value={value}
        onChange={handleInfo}
        />
      </label>
    );
  }
}
 
export default InputFileComp;