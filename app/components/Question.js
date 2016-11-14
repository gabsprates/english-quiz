const React = require('react');
const QuizQuestions = require('../services/QuizQuestions');

var Question = React.createClass({

  getInitialState: function () {
    QuizQuestions.get().then(function (data) {
      console.log(data);
    });
    return null;
  },

  showQuestion: function () {
    alert(this);
  },

  render: function () {
    return <button className="btn question" onClick={this.showQuestion}>
      Questão X
    </button>
  }

});

module.exports = Question;
