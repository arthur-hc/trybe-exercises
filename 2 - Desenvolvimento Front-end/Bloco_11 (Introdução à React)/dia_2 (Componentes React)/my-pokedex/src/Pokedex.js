import React from 'react'
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  render() {
    const objt = this.props.pokemon
    return(
      <div>
        {objt.map((item, index) => <Pokemon key={index} pokemon={item}/>
      )}
      </div>
    )
  }
}

export default Pokedex;

// class Pokedex extends React.Component {
//   render() {
//     const pokemonList = this.props.data.map((item, index) => {
//       return <div key={index}><Pokemon pokemon={item}/></div>
//     })
//     return(
//       pokemonList
//     )
//   }
// }

// export default Pokedex;