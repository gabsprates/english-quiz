const React = require('react');

var Question = React.createClass({

  showQuestion: function () {
    alert(this);
  },

  render: function () {
    var self = this;
    var questions = null;

    if (this.props.updateQuestions.length) {

      questions = this.props.updateQuestions.map(function (question, chave) {
        return (
          <button key={chave} className="btn question" onClick={self.showQuestion}>
            Questão {chave}
          </button>
        );
      });

    }

    console.log(this.props.updateQuestions);
    console.log(questions);
    return (
      <div>{questions}</div>
    );
  }

});

module.exports = Question;
