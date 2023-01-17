<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import triviaLogo from '../../assets/logoTrivia.png';
import * as S from './style';

const three = 3;

class Ranking extends Component {
  state = {
    players: [],
  };

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage = () => {
    const players = JSON.parse(localStorage.getItem('PLAYERS')) || [];
    this.setState({
      players,
    });
  };

  sorted = (arr) => arr.sort((a, b) => b.assertions - a.assertions);

  createAvatarUrl = (email) => {
    const urlGravatar = `https://www.gravatar.com/avatar/${email}`;
    return urlGravatar;
  };

  render() {
    const { players } = this.state;

    return (
      <S.MainContainer>
        <S.Container>
          <img src={ triviaLogo } alt="logo trivia" />
          <h1 data-testid="ranking-title">Ranking</h1>
          { this.sorted(players)
            .splice(0, three)
            .map((player, index) => (
              <div key={ player?.name }>
                <S.PlayerContainer>
                  <img
                    src={ this.createAvatarUrl(player?.gravatarEmail) }
                    data-testid="header-profile-picture"
                    alt="avatar-gravatar"
                  />
                  <p data-testid={ `player-name-${index}` }>{player?.name}</p>
                </S.PlayerContainer>
                <S.PointsContainer>
                  <FaStar />
                  <p data-testid={ `player-score-${index}` }>
                    {`${player?.score} pontos`}
                  </p>
                </S.PointsContainer>
              </div>
            ))}
          <button
            data-testid="btn-go-home"
            type="button"
          >
            <Link to="/">Jogar Novamente</Link>
          </button>
        </S.Container>
      </S.MainContainer>
    );
  }
}

export default connect()(Ranking);
=======
>>>>>>> main-group-20
