import React from 'react'

class Pokemon extends React.Component {
  render() {
    const {name, type, image, averageWeight } = this.props.pokemon
    return (
      <div className='Pokemon-Div'>
        <h5 className='Pokemon-title-name'> {name}</h5>
        <img src={image} alt={`Imagem do Pokemon ${name}`} />
        <p className='Pokemon-Type'> {type} </p>
        <p className='Pokemon-Weight'> Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
      </div>
    )
  }
}

export default Pokemon;

// class Pokemon extends React.Component {
//   render() {
//     return (
//       <div className='Pokemon-Div'>
//         <h5 className='Pokemon-title-name'> {this.props.pokemon.name}</h5>
//         <img src={this.props.image} alt={`Imagem do Pokemon ${this.props.pokemon.name}`} />
//         <p className='Pokemon-Type'> {this.props.pokemon.type} </p>
//         <p className='Pokemon-Weight'> Average Weight: {this.props.pokemon.averageWeight.value} {this.props.pokemon.averageWeight.measurementUnit}</p>
//       </div>
//     )
//   }
// }

// export default Pokemon;