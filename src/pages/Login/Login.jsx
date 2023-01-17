import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MD5 } from 'crypto-js';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { saveDataOnStore, saveIconOnStore } from '../../redux/Actions';
import * as S from './style';
import trivia from '../../assets/logoTrivia.png';
import SettingsButton from '../../components/SettingsButton';

class Login extends Component {
  state = {
    name: '',
    email: '',
    redirectToGame: false,
  };

  handleChanger = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  fetchToken = async () => {
    const { dispatch } = this.props;
    const { name, email } = this.state;
    const url = 'https://opentdb.com/api_token.php?command=request';
    const actualToken = localStorage.getItem('token');
    const gravatarToken = MD5(email).toString();
    dispatch(saveIconOnStore(gravatarToken));
    dispatch(saveDataOnStore({ name, email }));

    if (!actualToken) {
      const res = await fetch(url);
      const data = await res.json();
      const TOKEN = data.token;
      localStorage.setItem('token', TOKEN);
      this.setState({
        redirectToGame: true,
      });
    }

    this.setState({
      redirectToGame: true,
    });
  };

  render() {
    const { name, email, redirectToGame } = this.state;
    return (
      <S.MainContainer>
        <S.Container>
          <img src={ trivia } alt="triviaImage" />
          <S.FormContainer>
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
              onClick={ this.fetchToken }
            >
              Play
            </button>
            <SettingsButton />
            { redirectToGame && <Redirect to="/game" />}
          </S.FormContainer>
        </S.Container>
      </S.MainContainer>
    );
  }
}

Login.propTypes = {
  dispatch: propTypes.func.isRequired,
};

export default connect()(Login);
