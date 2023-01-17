<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { FiSettings } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import * as S from '../styles/Header';

class Header extends Component {
  render() {
    const { gravatarUser, player, lastScore } = this.props;
    const urlGravatar = `https://www.gravatar.com/avatar/${gravatarUser}`;
    return (
      <S.MainContainer>
        <S.Container>
          <S.PlayerContainer>
            <img
              src={ urlGravatar }
              data-testid="header-profile-picture"
              alt="avatar-gravatar"
            />
            <p data-testid="header-player-name">{player}</p>
          </S.PlayerContainer>
          <S.ScoreContainer>
            <FaStar />
            <p data-testid="header-score">
              {`Pontos: ${lastScore}`}
            </p>
          </S.ScoreContainer>
          <button
            type="button"
            data-testid="btn-settings"
          >
            <Link to="/settings">
              <FiSettings />
            </Link>
          </button>
        </S.Container>
      </S.MainContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  gravatarUser: state.player.gravatarEmail,
  player: state.player.name,
  lastScore: state.player.score,
});

Header.propTypes = {
  gravatarUser: propTypes.string.isRequired,
  player: propTypes.string.isRequired,
  lastScore: propTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
=======
>>>>>>> main-group-20
