const React       = require('react');
const ReactDOM    = require('react-dom');
const Requests    = require('../services/Requests.js');
var Question      = require('./Question');
var QuestionModal = require('./QuestionModal');

var QuizTotal = React.createClass({

  gameSound:      document.getElementById('sound_game'),
  questionSound:  document.getElementById('sound_question'),
  wrongAnswer1:   document.getElementById('sound_wrong'),
  wrongAnswer2:   document.getElementById('sound_wrong2'),
  rightAnswer1:   document.getElementById('sound_correct'),
  rightAnswer2:   document.getElementById('sound_correct2'),

  startGameSong: function () {
    this.gameSound.currentTime = 0;
    this.gameSound.play();
  },

  startQuestionSong: function () {
    this.questionSound.currentTime = 0;
    this.questionSound.play();
  },

  stopSongs: function () {
    this.gameSound.pause();
    this.questionSound.pause();
  },

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
    var whatSound = Math.ceil(Math.random() * 2);
    var sound     = "";
    Requests.setAnswered(question).then(function (response) {
      this.listQuestions(response.data.perguntas);
    }.bind(this));

    this.stopSongs();

    if (questionResponse) {
      sound = "rightAnswer" + whatSound;
    } else {
      sound = "wrongAnswer" + whatSound;
    }
    this[sound].play();
  },

  listQuestions: function (r) {
    this.setState({ questions: r });
  },

  updateQuestion: function (r) {
    this.setState({ thisQuestion: r, showModal: true });
    this.stopSongs();
    this.startQuestionSong();
  },

  closeModal: function () {
    this.setState({ showModal: false });
    this.stopSongs();
    this.startGameSong();
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
