import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { number, string } from 'prop-types';
import { connect } from 'react-redux';
import FeedbackCard from '../../components/FeedbackCard';
import * as S from '../../styles/Feedback';
import triviaLogo from '../../assets/logoTrivia.png';

const THREE = 3;

class Feedback extends Component {
  render() {
    const { gravatarUser, assertions } = this.props;
    const urlGravatar = `https://www.gravatar.com/avatar/${gravatarUser}`;
    return (
      <S.MainContainer>
        <img
          src={ triviaLogo }
          alt="Trivia Logo"
        />
        <S.FeedbackContainer>
          <img
            src={ urlGravatar }
            data-testid="header-profile-picture"
            alt="avatar-gravatar"
            className={ assertions < THREE ? 'cbb-img' : '' }

          />
          <div>
            {assertions < THREE ? (
              <h3 data-testid="feedback-text" className="cbb">Could be better...</h3>)
              : (<h3 data-testid="feedback-text">Well Done!</h3>)}
            <div data-testid="feedback-text">
              <FeedbackCard />
            </div>
          </div>
        </S.FeedbackContainer>
        <S.ButtonsContainer>
          <button
            type="button"
            data-testid="btn-ranking"
          >
            <Link to="/ranking">Ranking</Link>
          </button>
          <button
            type="button"
            data-testid="btn-play-again"
            className="play-again"
          >
            <Link to="/">Play Again</Link>
          </button>
        </S.ButtonsContainer>
      </S.MainContainer>
    );
  }
}

const mapStateToProps = ({ player: { gravatarEmail, assertions, score } }) => ({
  gravatarUser: gravatarEmail,
  assertions,
  score,
});

Feedback.propTypes = {
  gravatarUser: string.isRequired,
  assertions: number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
