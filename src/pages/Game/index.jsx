import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';

const RANDOM = 0.5;
const INDEX = { count: -1 };

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
  };

  componentDidMount() {
    this.fetchQuestions();
  }

  componentDidUpdate(_, prevState) {
    const { questions, actualQuestion } = this.state;
    const {
      correct_answer: correct,
      incorrect_answers: incorrect,
    } = questions[actualQuestion];
    if (prevState.actualQuestion !== actualQuestion) {
      this.setState({
        randomAnswers: this.auxRandomize(correct, incorrect),
      });
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
  };

  onClickReveal = (answer) => {
    const { revealQuests, actualQuestion, questions } = this.state;
    const { correct_answer: correctAnswer } = questions[actualQuestion];
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

  render() {
    const {
      redirectToLogin,
      randomAnswers,
      actualQuestion,
      questions,
      revealQuests,
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
            >
              {answer}

            </button>
          ))}
        </div>
        {
          revealQuests
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
