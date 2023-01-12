import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

class Feedback extends Component {
  render() {
    const { gravatarUser } = this.props;
    const urlGravatar = `https://www.gravatar.com/avatar/${gravatarUser}`;
    return (
      <div>
        <img
          src={ urlGravatar }
          data-testid="header-profile-picture"
          alt="avatar-gravatar"
        />
        <p data-testid="feedback-text">Feedback</p>
      </div>
    );
  }
}

const mapStateToProps = ({ player: { gravatarEmail } }) => ({
  gravatarUser: gravatarEmail,
});

Feedback.propTypes = {
  gravatarUser: string.isRequired,
};

export default connect(mapStateToProps)(Feedback);
