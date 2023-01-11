import React, { Component } from 'react';

class Login extends Component {
  state = {
    name: '',
    email: '',
  };

  handleChanger = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, email } = this.state;
    return (
      <form>
        <input
          type="text"
          placeholder="Digite seu Nome"
          data-testid="input-player-name"
          name="name"
          value={ name }
          onChange={ this.handleChanger }
        />
        <input
          type="email"
          placeholder="Digite seu Email"
          data-testid="input-gravatar-email"
          name="email"
          value={ email }
          onChange={ this.handleChanger }

        />
        <button
          type="button"
          data-testid="btn-play"
          disabled={ !name.length > 0 || !email.length > 0 }
        >
          Play

        </button>
      </form>
    );
  }
}

export default Login;
