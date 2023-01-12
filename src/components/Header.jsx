import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class Header extends Component {
  render() {
    const { gravatarUser, player, score } = this.props;
    const urlGravatar = `https://www.gravatar.com/avatar/${gravatarUser}`;
    return (
      <div>
        <p data-testid="header-player-name">{player}</p>
        <img
          src={ urlGravatar }
          data-testid="header-profile-picture"
          alt="avatar-gravatar"
        />
        <p data-testid="header-score">{ score }</p>
        <button
          type="button"
          data-testid="btn-settings"
        >
          <Link to="/settings">Configurações</Link>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gravatarUser: state.gravatarReducer.gravatarUser,
  player: state.playerReducer.name,
  score: state.playerReducer.score,
});

Header.propTypes = {
  gravatarUser: propTypes.string.isRequired,
  player: propTypes.string.isRequired,
  score: propTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
