import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class Header extends Component {
  render() {
    const { gravatarUser, userName } = this.props;
    const urlGravatar = `https://www.gravatar.com/avatar/${gravatarUser}`;
    return (
      <div>
        <p data-testid="header-player-name">{userName}</p>
        <img
          src={ urlGravatar }
          data-testid="header-profile-picture"
          alt="avatar-gravatar"
        />
        <p data-testid="header-score">0</p>

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
  userName: state.userReducer.name,
});

Header.propTypes = {
  gravatarUser: propTypes.string.isRequired,
  userName: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
