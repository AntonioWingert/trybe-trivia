import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Feedback extends Component {
  render() {
    return (
      <div>
        <div data-testid="feedback-text">Feedback</div>
        <button
          type="button"
          data-testid="btn-play-again"
        >
          <Link to="/">Play Again</Link>
        </button>

        <button
          type="button"
          data-testid="btn-ranking"
        >
          <Link to="/ranking">Ranking</Link>
        </button>
      </div>
    );
  }
}
