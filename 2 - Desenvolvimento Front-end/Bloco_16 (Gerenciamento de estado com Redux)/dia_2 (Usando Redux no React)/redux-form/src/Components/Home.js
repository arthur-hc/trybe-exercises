import React from 'react'
import { connect } from 'react-redux'
import { removeAction, recoverAction } from '../Actions'

class Home extends React.Component {
  render() {
    const { candidatesList, remove } = this.props;
    return (
      <div>
        <h1>Página inicial</h1>
        {candidatesList.length ===  0 ? <p>Sem Candidatos</p> : candidatesList.map(({nome, email, cpf, endereço, cidade, estado}) => 
          <div className="div-candidato">
            <h3>{nome}</h3>
            <p>E-mail: {email}</p>
            <p>CPF: {cpf}</p>
            <p>Endereço: {endereço}</p>
            <p>Cidade: {cidade}</p>
            <p>Estado: {estado}</p>
            <button onClick={() => remove(cpf)}>Remover</button>
          </div>
        )}
      </div>
    )    
  }
}

const mapStateToProps = (state) => ({
  candidatesList: state.candidatesReducer.candidates,
})

const mapDispatchToProps = (dispatch) => ({
  remove: (cpf) => dispatch(removeAction(cpf))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
