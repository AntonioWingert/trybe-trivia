import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <button
          data-testid="btn-go-home"
          type="button"
        >
          <Link to="/">Jogar Novamente</Link>
        </button>

        {
          this.sorted(players)
            .map((player, index) => (
              <div key={ player?.name }>
                <img
                  src={ this.createAvatarUrl(player?.gravatarEmail) }
                  data-testid="header-profile-picture"
                  alt="avatar-gravatar"
                />
                <p data-testid={ `player-assertions-${index}` }>{player?.assertions}</p>
                <p data-testid={ `player-name-${index}` }>{player?.name}</p>
                <p data-testid={ `player-score-${index}` }>{player?.score}</p>
              </div>
            ))
        }
      </div>
    );
  }
}

export default connect()(Ranking);
