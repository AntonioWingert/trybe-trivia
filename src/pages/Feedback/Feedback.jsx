import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Feedback extends Component {
  render() {
    return (
      <div data-testid="feedback-text">
        <button data-testid="btn-ranking" type="button">
          <Link to="/ranking">ranking</Link>
        </button>

      </div>
    );
  }
}
