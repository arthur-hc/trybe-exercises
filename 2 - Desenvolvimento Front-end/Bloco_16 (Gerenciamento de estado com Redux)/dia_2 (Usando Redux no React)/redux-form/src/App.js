import { Switch, Route } from 'react-router';
import { Link} from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Register from './Components/Register'

function App() {
  return (
    <>
    <nav>
      <Link to="/"><button>HOME</button></Link>
      <Link to="/register"><button>Register</button></Link>
    </nav>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/register' component={Register}/>
    </Switch>
    </>
  );
}

export default App;
