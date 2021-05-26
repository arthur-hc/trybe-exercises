import './App.css';
import Pokedex from './Pokedex';
import Data from './data';

function App() {
  return (
    <div className="App">
      <Pokedex pokemon={Data} />
    </div>
  );
}

export default App;
