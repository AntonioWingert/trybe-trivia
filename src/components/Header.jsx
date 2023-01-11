import React, { Component } from 'react';
import { shape, func } from 'prop-types';

class Header extends Component {
  render() {
    const { props: { history } } = this.props;
    return (
      <div>
        <p>Header</p>
        <button
          type="button"
          data-testid="btn-settings"
          onClick={ () => history.push('/settings') }
        >
          Configurações
        </button>
      </div>
    );
  }
}

Header.propTypes = {
  props: shape({
    history: shape({
      push: func,
    }),
  }).isRequired,
};

export default Header;
