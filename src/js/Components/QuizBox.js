import React, { Component } from 'react'
import QuizNotifications from './QuizNotifications'
import QuizQuestion from './Modal/QuizQuestion'
import ButtonsList from './Buttons/ButtonsList'
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

    this.setQuestionsButtons  = this.setQuestionsButtons.bind(this);
    this.setQuizNotification  = this.setQuizNotification.bind(this);
    this.handleQuestionButton = this.handleQuestionButton.bind(this);
    this.changeModalStatus    = this.changeModalStatus.bind(this);
    this.submitAnswer         = this.submitAnswer.bind(this);
    this.setQuestion          = this.setQuestion.bind(this);
  }

  componentDidMount() {
    Requests.getQuestions(['answered'])
      .then((res) => {
        this.setQuestionsButtons(res.data);
      })
      .catch((res) => {
        this.setQuizNotification(res.toString(), 'danger');
      });
  }

  setQuestionsButtons(data) {
    this.setState({ questionsButtons: data });
  }

  setQuizNotification(notification, type) {
    this.setState({
      quizNotification: {
        message: notification,
        type: type,
        show: true
      }
    });
  }

  handleQuestionButton(question) {
    Requests.getQuestionById(question.id)
      .then((res) => {
        res.data["number"] = question.number;
        this.setQuestion(res.data);
        this.changeModalStatus(true);
      })
      .catch((res) => {
        this.setQuizNotification(res.toString(), 'danger');
      });
  }

  setQuestion(question) {
    this.setState({ questionModal: question });
  }

  submitAnswer(e) {
    e.preventDefault();
    // TODO: submit form and update button state
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
      </div>
    )
  }

}
