// PARTE 1 - CONFIG INICIAL DO REACT APP

// PARTE 2
  // import React from 'react';
  // import './App.css';
  
  // function App() {
  //   return (
  //     <div className="App">
  //       <label htmlFor="id-email">
  //         Email
  //       </label>
  //       <input id="id-email" type="email" />
  //       <input id="btn-send" type="button" value="Enviar" />
  //     </div>
  //   );
  // }
  
  // export default App;

// PARTE 3
// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <label htmlFor="id-email">
//         Email
//       </label>
//       <input id="id-email" type="email" />
//       <input data-testid="id-send" id="btn-send" type="button" value="Enviar" />
//       <input id="btn-back" type="button" value="Voltar" />
//     </div>
//   );
// }

// export default App;

//PARTE 4
  // App.js
  // import React, { Component } from 'react';
  // import './App.css';
  
  // class App extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       email: '',
  //       saveEmail: '',
  //     };
  //   }
  
  //   changeEmail(value) {
  //     this.setState({ email: value });
  //   }
  
  //   changeSaveEmail(value) {
  //     this.setState({ saveEmail: value, email: '' });
  //   }
  
  //   render() {
  //     const { email, saveEmail } = this.state;
  //     return (
  //       <div className="App">
  //         <label htmlFor="id-email">
  //           Email
  //         </label>
  //         <input
  //           id="id-email"
  //           value={email}
  //           type="email"
  //           onChange={(e) => this.changeEmail(e.target.value)}
  //         />
  //         <input
  //           id="btn-enviar"
  //           type="button"
  //           data-testid="id-send"
  //           value="Enviar"
  //           onClick={() => this.changeSaveEmail(email)}
  //         />
  //         <input id="btn-id" type="button" value="Voltar" />
  //         <h2 data-testid="id-email-user">{`Valor: ${saveEmail}`}</h2>
  //       </div>
  //     );
  //   }
  // }
  
  // export default App;

  // PARTE 5
  import React, { Component } from 'react';
  import './App.css';
  import ValidEmail from './ValidEmail';
  
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        anyInput: false,
        email: '',
        saveEmail: '',
      };
    }
  
    changeEmail(value) {
      this.setState({ email: value });
    }
  
    changeSaveEmail(value) {
      this.setState({ saveEmail: value, email: '', anyInput: true, });
    }
  
    render() {
      const { email, saveEmail, anyInput } = this.state;
      return (
        <div className="App">
          <label htmlFor="id-email">
            Email
          </label>
          <input
            id="id-email"
            value={email}
            type="email"
            onChange={(e) => this.changeEmail(e.target.value)}
          />
          <input
            id="btn-enviar"
            type="button"
            data-testid="id-send"
            value="Enviar"
            onClick={() => this.changeSaveEmail(email)}
          />
          <input id="btn-id" type="button" value="Voltar" />
          {anyInput? <ValidEmail email={saveEmail}/> : ''}
        </div>
      );
    }
  }
  
  export default App;
