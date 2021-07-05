import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'
import { deleteClientAction } from '../Actions'
import ClientCard from '../Components/ClientCard'

class Clients extends React.Component {
  constructor() {
    super();
    this.state = {
      sorted: false,
    }
  }
  
  render() { 
    const { logInfo, clientsList, deleteClient } = this.props;
    const { sorted } = this.state;

    if (!logInfo) {
      alert('User login required for this resource')
      return <Redirect to="/login" />
    }

    const sortByName = ({target}) => {
      const { name, checked } = target;
      this.setState({
        [name] : checked
      })
    }
    
    const listToRender = () => {
      if(sorted) {
        const sortedList = [...clientsList]
        return sortedList.sort((a, b) => (a.name > b.name) ? 1 : -1 )
      }
      return clientsList;
    }

    return ( 
      <div>
        <h1>My Clients</h1>
        <label htmlFor='sorted'> Sort by name:
          <input type='checkbox' name='sorted' onChange={(e)=> sortByName(e)}/>
        </label>
        <div>
          {listToRender().length > 0 ? listToRender().map((client, index) => <div className="clientDiv" key={index}><ClientCard clientData={client}/><button onClick={() => deleteClient(client.id)}>Delete</button><Link to={ {pathname: `/edit/${client.id}`, state: { idToEdit: client.id, nameToEdit: client.name, ageToEdit: client.age, emailToEdit: client.email }} }><button>Edit</button></Link></div>) : <p>No clients</p>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logInfo: state.pageReducer.logged,
  clientsList: state.pageReducer.clients,
})

const mapDispatchToProps = (dispatch) => ({
  deleteClient: (id) => dispatch(deleteClientAction(id))
})

export default connect(mapStateToProps, mapDispatchToProps) (Clients);