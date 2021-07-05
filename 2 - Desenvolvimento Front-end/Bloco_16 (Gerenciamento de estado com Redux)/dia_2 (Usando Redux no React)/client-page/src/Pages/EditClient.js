import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'
import { editClientAction } from '../Actions'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      id: '',
      name: '',
      age: '',
      email: '',
      redirect: false,

    }
  }

  componentDidMount() {
    const { location } = this.props;
    const { state } = location;
    const { idToEdit, nameToEdit, ageToEdit, emailToEdit } = state
    this.setState({
      id: idToEdit,
      name: nameToEdit,
      age: ageToEdit,
      email: emailToEdit,
    })
  }
  
  render() {
    const { logInfo, edit } = this.props;
    const { id, name, age, email, redirect } = this.state;

    if (!logInfo) {
      alert('User login required for this resource')
      return <Redirect to="/login" />
    }

    if (redirect) {
      alert('Information has been saved')
      return <Redirect to="/clientpage" />
    }

    const handleChange = ({target}) => {
      const name = target.name;
      const value = target.value;
      this.setState({
        [name] : value
      });
    };

    const saveInfo = () => {
      if(name && age && email) {
        edit({
          id,
          name,
          age,
          email
        })
        this.setState({
          redirect: true
        });
      } else {
        alert('Information is required')
      }
    }

    return ( 
      <div>
        <h1>Edit Client</h1>
        <div>
        <form>
          <label htmlFor='name'> Name: <br/>
            <input name='name' value={name} onChange={(e) => handleChange(e)}/>
          </label><br/>
          <label htmlFor='age'> Age: <br/>
            <input name='age' type='number' value={age} onChange={(e) => handleChange(e)}/>
          </label><br/>
          <label htmlFor='email'> E-mail: <br/>
            <input name='email' value={email} onChange={(e) => handleChange(e)}/>
          </label>
        </form>
        <button onClick={() => saveInfo()}>Save</button>
        <Link to='/clientpage'><button>Cancel</button></Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logInfo: state.pageReducer.logged,
})

const mapDispatchToProps = (dispatch) => ({
  edit: (editClientInfo) => dispatch(editClientAction(editClientInfo))
})

export default connect(mapStateToProps, mapDispatchToProps) (Register);
