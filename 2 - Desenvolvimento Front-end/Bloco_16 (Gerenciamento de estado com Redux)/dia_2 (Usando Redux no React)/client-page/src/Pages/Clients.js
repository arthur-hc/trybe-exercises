import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import {  } from '../Actions'


class Clients extends React.Component {
  
  render() { 
    const { logInfo, clientsList } = this.props;
    if (!logInfo) {
      alert('User login required for this resource')
      return <Redirect to="/login" />
    }
    return ( 
      <div>
        <h1>My Clients</h1>
        <div>
          {clientsList.map((client, index) => <div key={index}><h3>{client.name}</h3><p>{client.id}</p></div>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logInfo: state.pageReducer.logged,
  clientsList: state.pageReducer.clients,
})

export default connect(mapStateToProps) (Clients);