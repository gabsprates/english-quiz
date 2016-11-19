const React       = require('react');
const ReactDOM    = require('react-dom');
const Requests    = require('../services/Requests.js');
var Question      = require('./Question');
var QuestionModal = require('./QuestionModal');

var QuizTotal = React.createClass({

  getInitialState: function() {
    this.getQuestions();

    return {
      questions: [],
      thisQuestion: {
        pergunta: "",
        respostas: [],
        respondida: 0,
        questao: 0
      },
      showModal: false
    };
  },

  getQuestions: function () {
    Requests.getQuestions().then(function (response) {
      this.listQuestions(response.data.perguntas);
    }.bind(this));
  },

  answerQuestion: function (question, questionResponse) {
    Requests.setAnswered(question).then(function (response) {
      this.listQuestions(response.data.perguntas);
    }.bind(this));
    console.log(questionResponse);
  },

  listQuestions: function (r) {
    this.setState({ questions: r });
  },

  updateQuestion: function (r) {
    this.setState({ thisQuestion: r, showModal: true });
  },

  closeModal: function () {
    this.setState({ showModal: false });
  },

  render: function () {
    return (
      <div>
        <h1 className="title is-1 has-text-centered">English Quiz</h1>
        <h2 className="subtitle is-3 has-text-centered">questions</h2>
        <Question listQuestions={this.state.questions} showQuestion={this.updateQuestion} />
        {
          !!this.state.showModal &&
          <QuestionModal
            infoQuestion={this.state.thisQuestion}
            whenResponse={this.answerQuestion}
            closeModal={this.closeModal}
            />
        }
      </div>
    );
  }

});

module.exports = QuizTotal;
