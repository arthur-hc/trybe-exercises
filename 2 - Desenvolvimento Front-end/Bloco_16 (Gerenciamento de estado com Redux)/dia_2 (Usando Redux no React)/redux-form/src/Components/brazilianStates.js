import React, { Component } from 'react';

class SelectBrStates extends Component {
  render() {
    const {keyName, ask, func} = this.props
    const states = ['AC',  'AL',  'AP',  'AM',  'BA',  'CE',  'DF',  'ES',  'GO',  'MA',  'MT',  'MS',  'MG',  'PA',  'PB',  'PR',  'PE',  'PI',  'RJ',  'RN',  'RS',  'RO',  'RR',  'SC',  'SP',  'SE',  'TO'];
    return (  
      <label name={keyName}>{ask}
        <select name={keyName} onChange={func}>
          {states.map((state, index) => <option value={state} key={index}>{state}</option>)}
        </select>
      </label>
    );
  }
}

export default SelectBrStates;