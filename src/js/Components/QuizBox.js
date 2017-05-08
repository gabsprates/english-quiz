import React, { Component } from 'react'
import QuizNotifications from './QuizNotifications'
import QuizQuestion from './Modal/QuizQuestion'
import ButtonsList from './Buttons/ButtonsList'
import Settings from './Settings'
import Requests from '../Services/Requests'

export default class QuizBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questionsButtons: [],
      quizNotification: {
        message: '',
        show: false,
        type: 'is-off'
      },
      isQuestionActive: false,
      questionModal: {}
    };

    this.getQuestionsButtons  = this.getQuestionsButtons.bind(this);
    this.setQuestionsButtons  = this.setQuestionsButtons.bind(this);
    this.setQuizNotification  = this.setQuizNotification.bind(this);
    this.handleQuestionButton = this.handleQuestionButton.bind(this);
    this.updateButtonState    = this.updateButtonState.bind(this);
    this.changeModalStatus    = this.changeModalStatus.bind(this);
    this.submitAnswer         = this.submitAnswer.bind(this);
    this.setQuestion          = this.setQuestion.bind(this);
  }

  componentDidMount() {
    this.getQuestionsButtons();
  }

  getQuestionsButtons() {
    Requests.getQuestions(['answered'])
      .then((res) => {
        this.setQuestionsButtons(res.data);
      })
      .catch((res) => {
        this.setQuizNotification(res.toString());
      });
  }

  setQuestionsButtons(data) {
    this.setState({ questionsButtons: data });
  }

  setQuizNotification(notification, type = 'danger', show = true) {
    this.setState({
      quizNotification: {
        message: notification,
        type: type,
        show: show
      }
    });
  }

  handleQuestionButton(question) {
    Requests.getQuestionById(question.id)
      .then((res) => {
        res.data["number"] = question.number;
        res.data["isAnswering"] = false;
        this.setQuestion(res.data);
        this.changeModalStatus(true);
      })
      .catch((res) => {
        this.setQuizNotification(res.toString());
      });
  }

  setQuestion(question) {
    this.setState({ questionModal: question });
  }

  updateButtonState(question, status = true) {
    let button = this.state.questionsButtons.findIndex(obj => {
      return obj._id == question;
    });

    this.setState((prevState) => {
      questionsButtons: {
        $set: prevState.questionsButtons[button].answered = status
      }
    });
  }

  submitAnswer(e, question) {
    e.preventDefault();
    try {
      let answer = e.target.answer.value || NaN;

      if (isNaN(answer)) {
        throw {
          message: "You must to respond the questions...",
          type: 'warning'
        };
      } else if (!question) {
        throw new Error("Submission error.");
      }

      if (answer == question.answer) {
        question.answered = true;
        question.isAnswering = { correct: true };
      } else {
        question.answered = true;
        question.isAnswering = { correct: false };
      }

      this.setQuestion(question);
      this.updateButtonState(question._id);

      Requests.setAnswered(question._id)
        .catch((res) => {
          this.setQuizNotification(`${res.toString()} :: Fail to update database`);
        });

      this.changeModalStatus(true);

    } catch (e) {
      this.changeModalStatus(false);
      this.setQuizNotification(e.message, (e.type ? e.type : 'danger'));
      return;
    }
  }

  changeModalStatus(status = false) {
    if (!!!status) {
      this.setState({ questionModal: {} });
    }
    this.setState({ isQuestionActive: !!status });
  }

  render() {
    return (
      <div>
        <h1 className="title h1 has-text-centered">English Quiz</h1>
        { this.state.quizNotification.show &&
          <QuizNotifications
            notification={ this.state.quizNotification.message }
            close={ () => { this.setQuizNotification('', '', false); } }
            type={ this.state.quizNotification.type }
            />
        }
        <ButtonsList questions={ this.state.questionsButtons } handle={ this.handleQuestionButton } />

        { this.state.isQuestionActive &&
          <QuizQuestion
            question={ this.state.questionModal }
            closeModal={ this.changeModalStatus }
            submitAnswer={ this.submitAnswer }
            />
        }

        <hr />

        <Settings updateButton={ this.updateButtonState } />
      </div>
    )
  }

}
