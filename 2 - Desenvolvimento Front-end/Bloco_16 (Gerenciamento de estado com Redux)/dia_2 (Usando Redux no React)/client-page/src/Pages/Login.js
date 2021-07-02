import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../Actions'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      user: '',
      password: '',
    }
  }
  
  render() {
    const { user, password } = this.state;
    const { logInfo, enter } = this.props;

    const handleChange = ({target}) => {
      const name = target.name;
      const value = target.value;
      this.setState({
        [name] : value
      });
    };
    const userValidation = () => {
      const {user, password } = this.state;
      if(user === 'user' && password === '1234') {
        alert('Welcome');
        enter();
      } else {
        alert('User or Password incorrect');
        this.setState({
          user: '',
          password: '',
        });
      };
    };
    if(logInfo) {
      return <Redirect to="/clientpage" />
    }
    return ( 
      <div>
        <h1>Login</h1>
        <div>
          <form>
            <label htmlFor='user'> User:
              <input name='user' value={user} onChange={(e) => handleChange(e)}/>
            </label>
            <label htmlFor='password'> Password:
              <input name='password' type='password' value={password} onChange={(e) => handleChange(e)}/>
            </label>
          </form>
          <button onClick={() => userValidation()}>Enter</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logInfo: state.pageReducer.logged,
})

const mapDispatchToProps = (dispatch) => ({
  enter: () => dispatch(loginAction())
})

export default connect (mapStateToProps, mapDispatchToProps) (Login);