import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainContainer from '../styles/FeedbackCard';

class FeedbackCard extends Component {
  render() {
    const { assertions, score } = this.props;
    return (
      <MainContainer>

        <p
          data-testid="feedback-total-question"
        >
          {`Você acertou ${assertions} perguntas!`}

        </p>

        <p data-testid="feedback-total-score">
          {`Você fez ${score} pontos`}
        </p>
      </MainContainer>
    );
  }
}

FeedbackCard.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = ({ player: { assertions, score } }) => ({
  assertions,
  score,
});

export default connect(mapStateToProps)(FeedbackCard);
