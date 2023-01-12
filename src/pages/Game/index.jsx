import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';

const RANDOM = 0.5;
const INDEX = { count: -1 };
const TIME_LIMIT = 0;

class Game extends Component {
  state = {
    redirectToLogin: false,
    questions: [{
      category: '',
      difficulty: '',
      question: '',
      correct_answer: '',
      incorrect_answers: [],
    }],
    randomAnswers: [],
    actualQuestion: 0,
    revealQuests: false,
    time: 30,
    intervalId: '',
    points: '',
  };

  componentDidMount() {
    this.fetchQuestions();
    this.timer();
  }

  componentDidUpdate(_, prevState) {
    const { questions, actualQuestion, time } = this.state;
    const {
      correct_answer: correct,
      incorrect_answers: incorrect,
    } = questions[actualQuestion];
    if (prevState.actualQuestion !== actualQuestion) {
      this.setState({
        randomAnswers: this.auxRandomize(correct, incorrect),
      });
    }

    if (time === 0) {
      this.verifyTimerInZero();
    }
  }

  fetchQuestions = async () => {
    const actualToken = localStorage.getItem('token');
    const url = `https://opentdb.com/api.php?amount=5&token=${actualToken}`;
    const res = await fetch(url);
    const data = await res.json();
    const RESPONSE_CODE = 3;

    if (data.response_code === RESPONSE_CODE) {
      localStorage.removeItem('token');
      this.setState({
        redirectToLogin: true,
      });
      return;
    }

    const {
      correct_answer: correctQuest,
      incorrect_answers: incorrectQuest,
    } = data.results[0];

    this.setState({
      questions: data.results,
      randomAnswers: this.auxRandomize(correctQuest, incorrectQuest),
    });
  };

  auxRandomize = (correct, incorrect) => {
    const answers = [correct, ...incorrect];
    const randomAnswers = answers.sort(() => Math.random() - RANDOM);
    return randomAnswers;
  };

  changeQuestion = () => {
    const { actualQuestion } = this.state;
    const limitQuestions = 4;
    if (actualQuestion < limitQuestions) {
      this.setState((prevState) => ({
        actualQuestion: prevState.actualQuestion + 1,
        revealQuests: false,
      }));
    }
    this.timer();
  };

  onClickReveal = (answer) => {
    const { revealQuests, actualQuestion, questions, intervalId } = this.state;
    const { correct_answer: correctAnswer } = questions[actualQuestion];
    if (revealQuests === true) {
      clearInterval(intervalId);
    }
    if (revealQuests && answer === correctAnswer) {
      return 'green';
    } if (revealQuests) {
      return 'red';
    }
    return '';
  };

  handleIndex = () => {
    INDEX.count += 1;
    return INDEX.count;
  };

  timer = () => {
    const { time, intervalId } = this.state;
    const ONE_SECOND = 1000;

    if (intervalId) {
      this.setState({
        time: 30,
        intervalId: '',
      });
    }

    if (time === 0) {
      this.setState({
        time: 30,
        intervalId: '',
      });
    }

    const timer = setInterval(
      () => {
        this.setState((prevState) => ({
          ...prevState,
          time: prevState.time - 1,
          intervalId: timer,
        }));
      },
      ONE_SECOND,
    );
  };

  timerValidator = () => {
    const { time } = this.state;

    if (time === TIME_LIMIT) {
      return true;
    }
  };

  verifyTimerInZero = () => {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  };

  render() {
    const {
      redirectToLogin,
      randomAnswers,
      actualQuestion,
      questions,
      revealQuests,
      time,
    } = this.state;
    const {
      question, category, correct_answer: correctAnswer,
    } = questions[actualQuestion];

    if (redirectToLogin) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <section>
        <Header />

        <section>
          <p>
            Tempo Restante:
            {' '}
            {time}
          </p>
          <h2 data-testid="question-text">
            {question}

          </h2>
          <h3
            data-testid="question-category"
          >
            {category}
          </h3>
        </section>
        <div data-testid="answer-options">
          {randomAnswers.map((answer, index) => (
            <button
              type="button"
              key={ index }
              data-testid={
                answer === correctAnswer
                  ? 'correct-answer'
                  : `wrong-answer-${this.handleIndex()}`
              }
              className={ this.onClickReveal(answer) }
              onClick={ () => this.setState({ revealQuests: true }) }
              disabled={ this.timerValidator() }
            >
              {answer}

            </button>
          ))}
        </div>
        {
          revealQuests || time === 0
            ? (
              <button
                type="button"
                onClick={ this.changeQuestion }
                data-testid="btn-next"
              >
                Next
              </button>
            ) : ''
        }
      </section>
    );
  }
}

export default Game;
