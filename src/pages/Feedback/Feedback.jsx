import React, { Component } from 'react';
import FeedbackCard from '../../components/FeedbackCard';

class Feedback extends Component {
  render() {
    return (
      <div data-testid="feedback-text">
        <FeedbackCard />
      </div>
    );
  }
}

export default Feedback;
