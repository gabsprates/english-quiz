const React = require('react');
const Requests = require('../services/Requests.js');

const Question = require('./Question');

var Questions = React.createClass({

  getInitialState: function() {
    Requests.getQuestions().then(function (response) {
      this.updateQuestions(response.data.perguntas);
    }.bind(this));

    return {
      questions: []
    };
  },

  updateQuestions: function (r) {
    this.setState({ questions: r });
  },

  render: function () {
    return (
      <Question updateQuestions={this.state.questions} />
    );
  }

});

module.exports = Questions;
