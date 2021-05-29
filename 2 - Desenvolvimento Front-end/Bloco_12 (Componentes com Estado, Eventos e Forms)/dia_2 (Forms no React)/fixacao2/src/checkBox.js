import React, { Component } from 'react';

class CheckBoxComp extends Component {
  render() { 
    const { keyName , value, ask, handleInfo} = this.props;
    return ( 
      <label name={keyName}> {ask}
        <input type="checkbox"
        name={keyName}
        value={value}
        onChange={handleInfo}
        />
      </label>
    );
  }
}
 
export default CheckBoxComp;