import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Pages/Login'
import Clients from './Pages/Clients'
import Register from './Pages/Register'
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    const { logInfo } = this.props;
    return (
      <div className="App">
       <header>
         <Link to='/'><button>Home</button></Link>
         <Link to='/login'><button>Login</button></Link>
         <Link to='/clientpage'><button>Clients</button></Link>
         <Link to='/register'><button>Register</button></Link>
         <Link to='/login'><button>Logout</button></Link>
         {logInfo? <p>You're Login</p> : <p>You're Logoff</p> }
       </header>
       <Switch>
         <Route exact path='/' component={ Home }/>
         <Route exact path='/login' component={ Login }/>
         <Route exact path='/clientpage' component={ Clients }/>
         <Route exact path='/register' component={ Register }/>
       </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logInfo: state.pageReducer.logged,
})

export default connect(mapStateToProps, null) (App);