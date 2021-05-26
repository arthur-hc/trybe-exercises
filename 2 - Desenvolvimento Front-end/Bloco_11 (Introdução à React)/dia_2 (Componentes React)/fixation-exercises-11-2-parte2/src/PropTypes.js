// PropTypes tem a função de checagem durante o desenvolvimento. Eles verificam se os dados são os esperados, e caso aconteça de não serem, um warning será emitido no console, alertando durante o desenvolvimento, previnindo bugs e economizando tempo

// Exemplo:
import React from 'react';
// PRIMEIRO IMPORTA O PROPTYPES
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name} {this.props.lastName}</h1>);
  }
}

// AQUI SERÁ INSERIDA A CHECAGEM DOS TIPOS DE INPUT. CASO NÃO SEJA DO TIPO ESPERADO, UM WARNING SERÁ EMITIDO
Greeting.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
};

// COM .isRequired EM CASOS DE INPUT VAZIO, TAMBÉM SERÁ EMITIDO ERRO. EX:
// Greeting.propTypes = {
//   name: PropTypes.string.isRequired,
//   lastName: PropTypes.string.isRequired,
// };

export default Greeting;

// TIPOS DE CHEGAGEM
// MeuComponente.propTypes = {
//   // Todos os validadores aqui são, por padrão, validadores opcionais.
//   // Para torná-los obrigatórios basta adicionar .isRequired
//   numeroObrigatório: PropTypes.number.isRequired,

//   // Tipos básico do JS.
//   stringOpcional: PropTypes.string,
//   numeroOpcional: PropTypes.number,
//   booleanoOpcional: PropTypes.bool,
//   funcaoOpcional: PropTypes.func,
//   objetoOpcional: PropTypes.object,
//   arrayOpcional: PropTypes.array,

//   // Um array de determinado tipo básico
//   arrayDe: PropTypes.arrayOf(PropTypes.number),

//   // Um objeto de determinado tipo básico
//   objetoDe: PropTypes.objectOf(PropTypes.number),

//   // Um objeto com forma específica
//   objetoComForma: PropTypes.shape({
//     name: PropTypes.string,
//     age: PropTypes.number,
//   }),

//   // Um objeto que não permite props extras
//   objetoComFormatoRigoroso: PropTypes.exact({
//     name: PropTypes.string,
//     quantity: PropTypes.number,
//     avaibility: PropTypes.bool,
//   }),
// };