import React from 'react';

class ClientCard extends React.Component {
  render() {
    const { clientData } = this.props
    const {id, name, age, email} = clientData
    return (
      <div className='clientInfo'>
        <h3> Name: {name}</h3>
        <p>ID: {id}</p>
        <p>Age: {age}</p>
        <p>E-mail: {email}</p>
      </div>
    )
  }
}  

export default ClientCard;