import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Register from './Components/Register'
import { connect } from 'react-redux'; 
import { recoverAction } from './Actions'

class App extends React.Component {
  render() {
    const { recover } = this.props
    return (
      <>
      <nav>
        <Link to="/"><button>Inicio</button></Link>
        <Link to="/register"><button>Registrar</button></Link>
        <button onClick={() => recover()}>Desfazer</button>
      </nav>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/register' component={Register}/>
      </Switch>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  recover: () => dispatch(recoverAction())
});

export default connect(null, mapDispatchToProps)(App);
