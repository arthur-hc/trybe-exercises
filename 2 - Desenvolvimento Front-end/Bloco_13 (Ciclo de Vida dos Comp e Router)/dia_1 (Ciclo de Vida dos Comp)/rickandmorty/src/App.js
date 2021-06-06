import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }


  //COM .THEN()
  // fetchCharacters = () => {
  //   fetch('https://rickandmortyapi.com/api/character')
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({characters: data.results})
  //   })
  // }

  //COM ASYNC
  async fetchCharacters() {
    const requestApi = await fetch('https://rickandmortyapi.com/api/character')
    const objtJson = await requestApi.json();
    this.setState({characters: objtJson.results})
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  // //OUTRA MANEIRA
  // componentDidMount() {
  //   fetch('https://rickandmortyapi.com/api/character')
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({characters: data.results})
  //   })
  // }

    render() {
    const { characters } = this.state
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({name, image}) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}

        </div>
      </div>
    );
  }
}

export default App;
