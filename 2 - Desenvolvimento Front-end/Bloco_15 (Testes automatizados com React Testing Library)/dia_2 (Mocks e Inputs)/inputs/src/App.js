import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
    };
  }

  handleInput({ target }) {
    const { name, value } = target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Teste de inputs</h1>
        <label>
          Nome:
          <input
            onChange={(e) => this.handleInput(e)}
            name='nome'
            data-testid='input-nome'
            value={this.state.nome}
          />
        </label>
        <p>
          E-mail:
          <input
            onChange={(e) => this.handleInput(e)}
            name='email'
            data-testid='input-email'
            value={this.state.email}
          />
        </p>
      </div>
    );
  }
}

export default App;