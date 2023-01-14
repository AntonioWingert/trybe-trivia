import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './styles';

class SettingsButton extends Component {
  render() {
    return (
      <Button
        type="button"
        data-testid="btn-settings"
        className="configure"
      >

        <Link to="/settings">Configurações</Link>
      </Button>
    );
  }
}

export default SettingsButton;
