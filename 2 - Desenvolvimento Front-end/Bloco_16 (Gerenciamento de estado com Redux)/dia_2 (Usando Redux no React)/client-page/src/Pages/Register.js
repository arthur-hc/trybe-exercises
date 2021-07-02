import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { addClientAction } from '../Actions'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }
  
  render() {
    const { logInfo, currentId, add } = this.props;
    const { name, age, email } = this.state;

    if (!logInfo) {
      alert('User login required for this resource')
      return <Redirect to="/login" />
    }

    const handleChange = ({target}) => {
      const name = target.name;
      const value = target.value;
      this.setState({
        [name] : value
      });
    };

    const registerClient = () => {
      if(name && age && email) {
        add({
          id: currentId,
          name,
          age,
          email
        })
        this.setState({
          name: '',
          age: '',
          email: ''
        })
      } else {
        alert('Information is required')
      }
    }

    return ( 
      <div>
        <h1>Register</h1>
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
        <button onClick={() => registerClient()}>Register</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logInfo: state.pageReducer.logged,
  currentId: state.pageReducer.id,
})

const mapDispatchToProps = (dispatch) => ({
  add: (newClientInfo) => dispatch(addClientAction(newClientInfo))
})

export default connect(mapStateToProps, mapDispatchToProps) (Register);
