import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { logoffAction } from '../Actions'

class Clients extends React.Component {
  
  render() { 
    const { logInfo } = this.props;
    if (!logInfo) {
      alert('User login required for this resource')
      return <Redirect to="/login" />
    }
    return ( 
      <div>
        <h1>Clients</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logInfo: state.pageReducer.logged,
})

const mapDispatchToProps = (dispatch) => ({
  logoff: () => dispatch(logoffAction())
})

export default connect(mapStateToProps, mapDispatchToProps) (Clients);